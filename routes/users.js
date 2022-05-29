const router = require("express").Router();
const User = require("../models/User")

// ユーザー登録
router.post("/register", async (req, res) => {
    try{
        const newUser = await new User({});
    } catch (err) {
        return res.status(500).json(err);
    }
})

module.exports = router;