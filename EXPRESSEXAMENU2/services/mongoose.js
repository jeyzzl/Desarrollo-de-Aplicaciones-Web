const mongoose = require('mongoose');
let count = 0;

const connectMongo = ()=>{
    console.log('connecting to Mongo');
    mongoose.connect('mongodb://localhost:27017/api-friends').then(()=>{
        console.log('Connected to Mongo!');
    }).catch(err =>{
        console.log('Could not connecto to MongoDB, try again', ++count);
        setTimeout(connectMongo, 5000);
    })
}

module.exports = connectMongo;