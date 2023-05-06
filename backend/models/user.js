const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, trim: true },
    phoneNo: { type: Number, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;