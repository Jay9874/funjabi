const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');

const UserSchema = mongoose.Schema({
    email: String,
    password: String,
    jwtLoginToken: String,
});

UserSchema.methods.comparePassword = async function (enteredPasssword) {
    return bcrypt.compare(enteredPasssword, this.password);
};

UserSchema.methods.getLoginToken = function () {
    const loginToken = JWT.sign(
        { userId: this._id },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRE,
        }
    );
    this.jwtLoginToken = loginToken;
    return loginToken;
};

const User = mongoose.model('User', UserSchema)
module.exports = User