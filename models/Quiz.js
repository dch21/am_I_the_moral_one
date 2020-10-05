const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})
module.exports = Quiz = mongoose.model('Quiz', QuizSchema);
