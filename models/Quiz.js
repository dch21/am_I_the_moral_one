const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema(
  {
    _id: Number,
    quizNum: Number,
    question: {
            text: String, 
            questionChoices: 
                {
                choiceA: {
                    demo: {
                        age: {
                            "under-18": {type: Number, default: 0},
                            "18-22": {type: Number, default: 0 },
                            "23-40": { type:Number, default: 0},
                            "41-59": {type: Number, default: 0},
                            "60+" : {type: Number, default: 0}
                        },
                        ethnicity: {
                            "White": {type: Number, default: 0},
                            "Black": {type: Number, default: 0},
                            "Hispanic": {type: Number, default: 0},
                            "South-Asian": {type: Number, default: 0},
                            "East-Asian": {type: Number, default: 0},
                            "Middle-Eastern": {type: Number, default: 0},
                            "Multi-racial": {type: Number, default: 0},
                            "Other": {type: Number, default: 0},
                        },
                        gender: {
                            "Male": {type: Number, default: 0},
                            "Female": {type: Number, default: 0},
                            "Non-Binary": {type: Number, default: 0},
                            "Other": {type: Number, default: 0},
                            "Prefer-Not-To-Self-Id": {type: Number, default: 0},
                        },
                        location: {
                            "Urban": {type: Number, default: 0},
                            "Suburban": {type: Number, default: 0},
                            "Rural": {type: Number, default: 0}
                            },
                        petChoice: {
                            "Dog": {type: Number, default: 0},
                            "Cat": {type: Number, default: 0},
                            "Fish": {type: Number, default: 0},
                            "Plant": {type: Number, default: 0}
                         },
                        religiousAffilation: {
                            "Islam": {type: Number, default: 0},
                            "Christianity": {type: Number, default: 0},
                            "Judaism": {type: Number, default: 0},
                            "Hinduism": {type: Number, default: 0},
                            "Buddahism": {type: Number, default: 0},
                            "Sikhism": {type: Number, default: 0},
                            "Agnostic": {type: Number, default: 0},
                            "Athiest": {type: Number, default: 0},
                            "Prefer-Not-To-Self-Id": {type: Number, default: 0}
                         },
                        politicalLeaning: {
                            "Lean-left": {type: Number, default: 0},
                            "Lean-Right": {type: Number, default: 0},
                            "Centrist": {type: Number, default: 0},
                            "Libertarian": {type: Number, default: 0},
                            "Socialist": {type: Number, default: 0},
                            "Anarchist": {type: Number, default: 0},
                            "Other": {type: Number, default: 0}  
                         },
                        education: {
                            "High-school-or-lower": {type: Number, default: 0},
                            "Undergraduate-degree": {type: Number, default: 0},
                            "Bootcamp": {type: Number, default: 0},
                            "Masters": {type: Number, default: 0},
                            "PHD": {type: Number, default: 0},
                         }
            
                        }
                    },    
                    choiceB: {
                        demo: {
                            age: {
                                "under-18": {type: Number, default: 0},
                                "18-22": {type: Number, default: 0 },
                                "23-40": { type:Number, default: 0},
                                "41-59": {type: Number, default: 0},
                                "60+" : {type: Number, default: 0}
                            },
                            ethnicity: {
                                "White": {type: Number, default: 0},
                                "Black": {type: Number, default: 0},
                                "Hispanic": {type: Number, default: 0},
                                "South-Asian": {type: Number, default: 0},
                                "East-Asian": {type: Number, default: 0},
                                "Middle-Eastern": {type: Number, default: 0},
                                "Multi-racial": {type: Number, default: 0},
                                "Other": {type: Number, default: 0},
                            },
                            gender: {
                                "Male": {type: Number, default: 0},
                                "Female": {type: Number, default: 0},
                                "Non-Binary": {type: Number, default: 0},
                                "Other": {type: Number, default: 0},
                                "Prefer-Not-To-Self-Id": {type: Number, default: 0},
                            },
                            location: {
                                "Urban": {type: Number, default: 0},
                                "Suburban": {type: Number, default: 0},
                                "Rural": {type: Number, default: 0}
                                },
                            petChoice: {
                                "Dog": {type: Number, default: 0},
                                "Cat": {type: Number, default: 0},
                                "Fish": {type: Number, default: 0},
                                "Plant": {type: Number, default: 0}
                             },
                            religiousAffilation: {
                                "Islam": {type: Number, default: 0},
                                "Christianity": {type: Number, default: 0},
                                "Judaism": {type: Number, default: 0},
                                "Hinduism": {type: Number, default: 0},
                                "Buddahism": {type: Number, default: 0},
                                "Sikhism": {type: Number, default: 0},
                                "Agnostic": {type: Number, default: 0},
                                "Athiest": {type: Number, default: 0},
                                "Prefer-Not-To-Self-Id": {type: Number, default: 0}
                             },
                            politicalLeaning: {
                                "Lean-left": {type: Number, default: 0},
                                "Lean-Right": {type: Number, default: 0},
                                "Centrist": {type: Number, default: 0},
                                "Libertarian": {type: Number, default: 0},
                                "Socialist": {type: Number, default: 0},
                                "Anarchist": {type: Number, default: 0},
                                "Other": {type: Number, default: 0}  
                             },
                            education: {
                                "High-school-or-lower": {type: Number, default: 0},
                                "Undergraduate-degree": {type: Number, default: 0},
                                "Bootcamp": {type: Number, default: 0},
                                "Masters": {type: Number, default: 0},
                                "PHD": {type: Number, default: 0},
                             }
                        }    
                    }
                }
        }
  }

);


    // QuizSchema.methods.tally = function( quizNum, id, user, choice){
    //     const userAge = "under 18";
    //         db.quiz.findAndModify({
    //             query: { _id: id , quizNum: quizNum , choice: choice},
    //             update: { $inc: { "under 18": 1 } },
    //         });       
    //         this.model("Quiz").findAndModify({
    //             query: { choice: choice},
    //             update: { $inc: { "under 18": 1 } },
    // };





module.exports = Quiz = mongoose.model('Quiz', QuizSchema);

