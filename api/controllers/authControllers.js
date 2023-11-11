const User = require('../models/userModel.js');
const bcrypt = require('bcryptjs');

exports.performSignUp = async (req, res) => {
    try {
        const { email, password } = req.body;

        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                success: false,
                msg: "User already exists!",
            });
        }

        const encryptedPassword = await bcrypt.hash(password, 10);
        user = await User.create({
            email,
            password: encryptedPassword
        });

        res.status(200).json({
            success: true,
            msg: "Account registered successfully!",
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            msg: "Something went wrong... Try again later!"
        });
    }
}

exports.performLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            return res.status(400).json({
                success: false,
                msg: "User is not registered!",
            });
        }

        const isPasswordMatched = await user.comparePassword(password);
        if (!isPasswordMatched) {
            return res.status(400).json({
                success: false,
                msg: "Invalid credential!",
            });
        }

        const loginToken = user.getLoginToken();
        await user.save();

        res.status(201).json({
            success: true,
            msg: "Login success!",
            loginToken
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            msg: "Something went wrong... Try again later!"
        });
    }
}

exports.performLoadUser = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            user: req.user,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            msg: "Something went wrong... Try again later!"
        });
    }
}