const User = require("../models/userModel.js");
const JWT = require("jsonwebtoken");

const isLoginToken = async (req, res, next) => {
    const loginToken = req.headers["login_token"];

    if (!loginToken) {
        return res.status(400).json({
            success: false,
            msg: "Session expired... Try again!",
        });
    }

    const checkToken = await User.findOne({ jwtLoginToken: loginToken });

    if (checkToken === null) {
        return res.status(400).json({
            success: false,
            msg: "Invalid Token!",
        });
    }

    const payload = JWT.verify(loginToken, process.env.JWT_SECRET);

    req.user = await User.findById(payload.userId);

    next();
};

module.exports = { isLoginToken };