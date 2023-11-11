const express = require("express");
const {
    performSignUp,
    performLogin,
    performLoadUser
} = require("../controllers/authControllers.js");
const { isLoginToken } = require("../middleware/auth.js");

const router = express.Router();

router.post("/sign-up", performSignUp);
router.post("/sign-in", performLogin);
router.get("/load-user", isLoginToken, performLoadUser);

module.exports = router;