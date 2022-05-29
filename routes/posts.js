const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("penetlate posts router")
});

module.exports = router;