const {Client} = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const Friend = require('../models/friend');

const client = new Client();

client.on('qr', (qr)=>{
    qrcode.generate(qr,{small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
    sendHappyMessage();

});

const connectWhatsApp = ()=>{
    client.initialize();
}

const sendHappyMessage = async () =>{
    const friends = await Friend.find({});
    const date = new Date();

    friends.forEach(friend => {
        if(parseInt(friend.birthday.substring(0,2)) === (date.getMonth()+1) && friend.birthday.substring(3,5)===date.getDate().toString()){
            // console.log('success');
            // console.log((date.getMonth()+1).toString());
            // console.log(date.getDate());
            // const number = friend.phone
            client.sendMessage(`${friend.phone}@c.us`,'HappyBirthday');
        }
        else{
            console.log('No friend with that birthday');
        }
    });
}

module.exports = {
    connectWhatsApp
};
