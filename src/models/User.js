const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    name: {type: String, require: true},
    email: {type: String, require: true},
    image: {type: String, require: true}
})

module.exports = mongoose.model('User', userSchema);
