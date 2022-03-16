const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendSchema = new Schema({
    name: String,
    phone: String,
    birthday: String,
});

const Friend = mongoose.model('Friend', friendSchema);

module.exports = Friend