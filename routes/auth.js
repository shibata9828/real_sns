const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("penetlate auth router")
});

module.exports = router;