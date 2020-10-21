import React from "react";
import './quizzes.scss'
import CreateQuizContainer from '../quiz_form/quiz_form_container';

class CreateQuiz extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            quiz: parseInt(this.props.totalQuizzes) + 1,
            id: '',
            text: '',
            choiceAText: '',
            choiceBText: ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchTotal();
    }

    handleClick(field) {

        this.setState({
            id: field
        })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let quiz = {
            text: this.state.text,
            choiceAText: this.state.choiceAText,
            choiceBText: this.state.choiceBText,
            quizNum: this.state.quiz,
            id: 17
        };
        // this.props.createQuestion(quiz);
        this.props.createQuestion(
          quiz
        )
       debugger
    }

    render() {
        // debugger
        return (
            <div className="quizzes-page-div">
                <div className="new-quizzes-div">

                    <div className="quiz-form-box">
                        <h1 className="quiz-form-header">Create a Quiz</h1>
                        <form className="quiz-form" onSubmit={this.handleSubmit}>
                            <label>Question 1</label>
                            <input type="textarea" placeholder="Question text..." value={this.state.text} onChange={this.update('text')}></input>
                            <div className="input-form-answers">
                                <input type="text" placeholder="Answer 1" value={this.state.choiceAText} onChange={this.update('choiceAText')}></input>
                                <input type="text" placeholder="Answer 2" value={this.state.choiceBText} onChange={this.update('choiceBText')}></input>
                            </div>
                            <button
                                className="create-quiz-submit"
                                type="submit" value="" 
                                >Submit</button>
                        </form>
                        {/* <form className="quiz-form" onSubmit={this.handleSubmit}>
                            <label>Question 2</label>
                            <input type="textarea" placeholder="Question text..." value={this.state.text}></input>
                            <div className="input-form-answers">
                                <input type="text" placeholder="Answer 1" value={this.state.choiceAText}></input>
                                <input type="text" placeholder="Answer 2" value={this.state.choiceBText}></input>
                            </div>
                            <button
                                className="create-quiz-submit"
                                type="submit" value=""
                            >Submit</button>
                        </form>
                        <form className="quiz-form" onSubmit={this.handleSubmit}>
                            <label>Question 3</label>
                            <input type="textarea" placeholder="Question text..." value={this.state.text}></input>
                            <div className="input-form-answers">
                                <input type="text" placeholder="Answer 1" value={this.state.choiceAText}></input>
                                <input type="text" placeholder="Answer 2" value={this.state.choiceBText}></input>
                            </div>
                            <button
                                className="create-quiz-submit"
                                type="submit" value=""
                            >Submit</button>
                        </form>
                        <form className="quiz-form" onSubmit={this.handleSubmit}>
                            <label>Question 4</label>
                            <input type="textarea" placeholder="Question text..." value={this.state.text}></input>
                            <div className="input-form-answers">
                                <input type="text" placeholder="Answer 1" value={this.state.choiceAText}></input>
                                <input type="text" placeholder="Answer 2" value={this.state.choiceBText}></input>
                            </div>
                            <button
                                className="create-quiz-submit"
                                type="submit" value=""
                            >Submit</button>
                        </form>
                        <form className="quiz-form" onSubmit={this.handleSubmit}>
                            <label>Question 5</label>
                            <input type="textarea" placeholder="Question text..." value={this.state.text}></input>
                            <div className="input-form-answers">
                                <input type="text" placeholder="Answer 1" value={this.state.choiceAText}></input>
                                <input type="text" placeholder="Answer 2" value={this.state.choiceBText}></input>
                            </div>
                            <button
                                className="create-quiz-submit"
                                type="submit" value=""
                            >Submit</button>
                        </form>
                        <form className="quiz-form" onSubmit={this.handleSubmit}>
                            <label>Question 6</label>
                            <input type="textarea" placeholder="Question text..." value={this.state.text}></input>
                            <div className="input-form-answers">
                                <input type="text" placeholder="Answer 1" value={this.state.choiceAText}></input>
                                <input type="text" placeholder="Answer 2" value={this.state.choiceBText}></input>
                            </div>
                            <button
                                className="create-quiz-submit"
                                type="submit" value=""
                            >Submit</button>
                        </form>
                        <form className="quiz-form" onSubmit={this.handleSubmit}>
                            <label>Question 7</label>
                            <input type="textarea" placeholder="Question text..." value={this.state.text}></input>
                            <div className="input-form-answers">
                                <input type="text" placeholder="Answer 1" value={this.state.choiceAText}></input>
                                <input type="text" placeholder="Answer 2" value={this.state.choiceBText}></input>
                            </div>
                            <button
                                className="create-quiz-submit"
                                type="submit" value=""
                            >Submit</button>
                        </form>
                        <form className="quiz-form" onSubmit={this.handleSubmit}>
                            <label>Question 8</label>
                            <input type="textarea" placeholder="Question text..." value={this.state.text}></input>
                            <div className="input-form-answers">
                                <input type="text" placeholder="Answer 1" value={this.state.choiceAText}></input>
                                <input type="text" placeholder="Answer 2" value={this.state.choiceBText}></input>
                            </div>
                            <button
                                className="create-quiz-submit"
                                type="submit" value=""
                            >Submit</button>
                        </form>
                        <form className="quiz-form" onSubmit={this.handleSubmit}>
                            <label>Question 9</label>
                            <input type="textarea" placeholder="Question text..." value={this.state.text}></input>
                            <div className="input-form-answers">
                                <input type="text" placeholder="Answer 1" value={this.state.choiceAText}></input>
                                <input type="text" placeholder="Answer 2" value={this.state.choiceBText}></input>
                            </div>
                            <button
                                className="create-quiz-submit"
                                type="submit" value=""
                            >Submit</button>
                        </form>
                        <form className="quiz-form" onSubmit={this.handleSubmit}>
                            <label>Question 10</label>
                            <input type="textarea" placeholder="Question text..." value={this.state.text}></input>
                            <div className="input-form-answers">
                                <input type="text" placeholder="Answer 1" value={this.state.choiceAText}></input>
                                <input type="text" placeholder="Answer 2" value={this.state.choiceBText}></input>
                            </div>
                            <button
                                className="create-quiz-submit"
                                type="submit" value=""
                            >Submit</button>
                        </form> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateQuiz;