const router = require("express").Router();
const noteOp = require("../db/noteOp");

router.get("/notes", (req, res) => {
    noteOp.getNote()
    .then((n) => res.json(n))
});

module.exports  = router;