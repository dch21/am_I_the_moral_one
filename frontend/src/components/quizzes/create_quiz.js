import React from "react";
import './quizzes.scss'
import CreateQuizContainer from '../quiz_form/quiz_form_container';

class CreateQuiz extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            quiz: 1
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(field) {

        this.setState({
            quiz: field
        })
    }

    render() {
        return (
            <div className="quizzes-page-div">
                <div className="new-quizzes-div">

                    <div className="quiz-form-box">
                        <h1 className="quiz-form-header">Create a Quiz</h1>
                        <form className="quiz-form">
                            <label>Question 1</label>
                            <input type="text" placeholder="Question text..."></input>
                            <div className="input-form-answers">
                                <input type="text" placeholder="Answer 1"></input>
                                <input type="text" placeholder="Answer 2"></input>
                            </div>
                            <label>Question 2</label>
                            <input type="text" placeholder="Question text..."></input>
                            <div className="input-form-answers">
                                <input type="text" placeholder="Answer 1"></input>
                                <input type="text" placeholder="Answer 2"></input>
                            </div>
                            <label>Question 3</label>
                            <input type="text" placeholder="Question text..."></input>
                            <div className="input-form-answers">
                                <input type="text" placeholder="Answer 1"></input>
                                <input type="text" placeholder="Answer 2"></input>
                            </div>
                            <label>Question 4</label>
                            <input type="text" placeholder="Question text..."></input>
                            <div className="input-form-answers">
                                <input type="text" placeholder="Answer 1"></input>
                                <input type="text" placeholder="Answer 2"></input>
                            </div>
                            <label>Question 5</label>
                            <input type="text" placeholder="Question text..."></input>
                            <div className="input-form-answers">
                                <input type="text" placeholder="Answer 1"></input>
                                <input type="text" placeholder="Answer 2"></input>
                            </div>
                            <label>Question 6</label>
                            <input type="text" placeholder="Question text..."></input>
                            <div className="input-form-answers">
                                <input type="text" placeholder="Answer 1"></input>
                                <input type="text" placeholder="Answer 2"></input>
                            </div>
                            <label>Question 7</label>
                            <input type="text" placeholder="Question text..."></input>
                            <div className="input-form-answers">
                                <input type="text" placeholder="Answer 1"></input>
                                <input type="text" placeholder="Answer 2"></input>
                            </div>
                            <label>Question 8</label>
                            <input type="text" placeholder="Question text..."></input>
                            <div className="input-form-answers">
                                <input type="text" placeholder="Answer 1"></input>
                                <input type="text" placeholder="Answer 2"></input>
                            </div>
                            <label>Question 9</label>
                            <input type="text" placeholder="Question text..."></input>
                            <div className="input-form-answers">
                                <input type="text" placeholder="Answer 1"></input>
                                <input type="text" placeholder="Answer 2"></input>
                            </div>
                            <label>Question 10</label>
                            <input type="text" placeholder="Question text..."></input>
                            <div className="input-form-answers">
                                <input type="text" placeholder="Answer 1"></input>
                                <input type="text" placeholder="Answer 2"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateQuiz;