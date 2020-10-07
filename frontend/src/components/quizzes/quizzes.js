import React from "react";
import './quizzes.scss'
import QuizForm from '../quiz_form/quiz_form'
class NewQuizzes extends React.Component {

    constructor(props){
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
                    {/* <img className="hands-img" src={hands}></img> */}
                    <div className="new-quizzes-directory">
                        <h1 className="new-quizzes-header">New quizzes:</h1>
                        <div className="new-quizzes-links">
                            <div onClick={() => this.handleClick(1)}>Quiz Title 1</div>
                            <div onClick={() => this.handleClick(2)}>Quiz Title 2</div>
                            <div onClick={() => this.handleClick(3)} >Quiz Title 3</div>
                            <div>Quiz Title 4</div>
                            <div>Quiz Title 5</div>
                            <div>Quiz Title 6</div>
                            <div>Quiz Title 7</div>
                            <div>Quiz Title 8</div>
                            <div>Quiz Title 9</div>
                            <div>Quiz Title 10</div>
                            <div>Quiz Title 11</div>
                            <div>Quiz Title 12</div>
                            <div>Quiz Title 13</div>
                            <div>Quiz Title 14</div>
                            <div>Quiz Title 15</div>
                            <div>Quiz Title 16</div>
                            <div>Quiz Title 17</div> 
                        </div>
                    </div>

                    <div className="quiz-form-box">
                        <h1 className="quiz-form-header">Quiz Title:</h1>
                        <div className="quiz-form">
                            <QuizForm quiz={this.state.quiz}></QuizForm>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default NewQuizzes;