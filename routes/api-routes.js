const router = require("express").Router();
const noteOp = require("../db/noteOp");
const { route } = require("./html-routes");


router.get("/notes", (req, res) => {
    noteOp.getNote()
    .then((n) => res.json(n))
});

router.post("/notes", (req,res) => {
    noteOp.addNote(req.body)
    .then((n) => res.json(n))
})

module.exports  = router;