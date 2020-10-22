const express = require("express");
const router = express.Router();
const Quiz = require('../../models/Quiz');
const mongoose = require('mongoose');


// prompt refers to a set of questions that total to a full quiz
// quizzes refers to ONE specific question

router.get("/test", (req, res) => res.json({ msg: "This is the prompt route" }));


router.get("/:id", (req, res) => {
   Quiz.find({ quizNum: req.params.id })
        .then((prompts) => res.json(prompts))
        .catch((err) =>
            res.status(404).json({ nopromptfound: "No prompt found with that ID" })
        );
});



module.exports = router;