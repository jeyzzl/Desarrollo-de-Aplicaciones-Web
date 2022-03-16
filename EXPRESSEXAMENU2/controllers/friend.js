const Friend = require('../models/friend');

async function findAll(req, res){
    const result = await Friend.find();
    res.json(result);
}

async function findById(req, res){
    const exist = await Friend.findById(req.params.id)
    if(exist){
        res.json({friend:exist})
    }else{
        res.status(400).json({msg: `No friend with id: ${req.params.id}`});
    }
}

async function findByBirthday(req, res){
    const exist = await Friend.find({birthday: req.params.string});

    if(exist){
        res.json({friend:exist});
    }else{
        res.status(400).json({msg: `No friend called: ${req.params.name}`});
    }
}

async function save(req, res){
    const newFriend = {
        name: req.body.name,
        phone: req.body.phone,
        birthday: req.body.birthday
    }
    if(!req.body.name||!req.body.phone||!req.body.birthday){
        return res.status(400).json({msg: 'Fill all the fields'});
    }

    const friend = new Friend(newFriend);
    const result = await friend.save();
    res.status(201).json({msg: 'New friend registered', friend:result});
}

async function update(req, res){
    const exist = await Friend.findById(req.params.id);
    if(exist){
        await Friend.findOneAndUpdate({_id: req.params.id}, req.body);
        res.status(201).json({msg: 'Friend updated', friend: await Friend.findById(req.params.id)});
    }
    else{
        res.status(400).json({msg: `No friend with id: ${req.params.id}`});
    }
}

async function deleteById(req, res){
    const exist = Friend.findById(req.params.id);
    if(exist){
        await Friend.deleteMany({_id: req.params.id});
        res.json({msg: 'Friend deleted', friend: await Friend.find()});
    }else{
        res.status(400).json({msg: `No friend with id: ${req.params.id}`});
    }
}

async function deleteByName(req, res){
    const exist = Friend.find({name: req.params.name});
    if(exist){
        await Friend.deleteMany({name: req.params.name});
        res.json({msg: 'Friend deleted', friend: await Friend.find()});
    }else{
        res.status(400).json({msg: `No friend wiht name: ${req.params.name}`});
    }
}


module.exports = {findAll, findById, findByBirthday, save, update, deleteById, deleteByName};
