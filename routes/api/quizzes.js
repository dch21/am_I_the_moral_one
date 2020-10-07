const express = require("express");
const router = express.Router();
const Quiz = require('../../models/Quiz');
const mongoose = require('mongoose');
// var mongo = require('mongodb').MongoClient;

router.get("/test", (req, res) => res.json({ msg: "This is the quiz route" }));

//  This would get the data for a specific Question NOT a quiz
router.get("/:id", (req, res) => {
  Quiz.findById(req.params.id)
    .then((quiz) => res.json(quiz))
    .catch((err) =>
      res.status(404).json({ noquizfound: "No quiz found with that ID" })
    );
});




router.patch("/update/:id", (req, res) => {
    filter =  { _id: req.params.id, quizNum: req.body.quizNum };
    update =  {  $inc: {[`question.questionChoices.${req.body.choice}.demo.age.${req.body.age}` ]: 1,
     [`question.questionChoices.${req.body.choice}.demo.education.${req.body.education}`]: 1,
     [`question.questionChoices.${req.body.choice}.demo.politicalLeaning.${req.body.politicalLeaning}`]: 1,
     [`question.questionChoices.${req.body.choice}.demo.religiousAffiliation.${req.body.religiousAffiliation}`]: 1,
     [`question.questionChoices.${req.body.choice}.demo.gender.${req.body.gender}`]: 1,
     [`question.questionChoices.${req.body.choice}.demo.petChoice.${req.body.petChoice}`]: 1,
     [`question.questionChoices.${req.body.choice}.demo.ethnicity.${req.body.ethnicity}`]: 1,
     [`question.questionChoices.${req.body.choice}.demo.location.${req.body.location}`]: 1,} };

    Quiz.findOneAndUpdate( filter, update, function(
    err,
    result
  ) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});


         
        
router.post("/createQuiz", (req, res) => {
    const newQuiz = new Quiz({
      _id: req.body.id,
      quizNum: req.body.quizNum,
      //   questionNum: req.body.questionNum,
      "question.text": req.body.text,
      "question.choiceAText": req.body.choiceAText,
      "question.choiceBText": req.body.choiceBText,
    });
    newQuiz.save().then((quiz) => res.json(quiz));
});



  
module.exports = router;