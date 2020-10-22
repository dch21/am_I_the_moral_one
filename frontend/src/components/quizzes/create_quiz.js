import React from "react";
import './quizzes.scss'
import CreateQuizContainer from '../quiz_form/quiz_form_container';

class CreateQuiz extends React.Component {

    constructor(props) {
        super(props);
        debugger
        this.state = {
            quiz: this.props.totalQuizzes[0].data,
            id: '',
            
            text1: '', 
            text2: '',
            text3: '',
            text4: '',
            text5: '',
            text6: '',
            text7: '',
            text8: '',
            text9: '',
            text10: '', 
    
            answerA1: '',
            answerA2: '',
            answerA3: '',
            answerA4: '',
            answerA5: '',
            answerA6: '',
            answerA7: '',
            answerA8: '',
            answerA9: '',
            answerA10: '',
            
            answerB1: '',
            answerB2: '',
            answerB3: '',
            answerB4: '',
            answerB5: '',
            answerB6: '',
            answerB7: '',
            answerB8: '',
            answerB9: '',
            answerB10: ''

            
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchTotal();
        this.setState({
            quiz: this.props.totalQuizzes[0].data
        })
        
    }

 

    update(field){
        debugger
        return e => this.setState({
            [field]: e.currentTarget.value,
             quiz: this.props.totalQuizzes[0].data
        });


    }
  

    handleClick() {
        
    
        
        let questions = []

        questions[0] = {
            text: this.state.text1,
            choiceAText: this.state.answerA1,
            choiceBText: this.state.answerB1,
            quizNum: this.state.quiz,
            id: parseInt(`${this.state.quiz}` + `${1}`) 
        };
        
        questions[1] = {
            text: this.state.text2,
            choiceAText: this.state.answerA2,
            choiceBText: this.state.answerB2,
            quizNum: this.state.quiz,
            id: parseInt(`${this.state.quiz}` + `${2}`) 
        };

        questions[2] = {
            text: this.state.text3,
            choiceAText: this.state.answerA3,
            choiceBText: this.state.answerB3,
            quizNum: this.state.quiz,
            id: parseInt(`${this.state.quiz}` + `${3}`) 
        };
        

        questions[3] = {
            text: this.state.text4,
            choiceAText: this.state.answerA4,
            choiceBText: this.state.answerB4,
            quizNum: this.state.quiz,
            id: parseInt(`${this.state.quiz}` + `${4}`) 
        };
    

        questions[4] = {
            text: this.state.text5,
            choiceAText: this.state.answerA5,
            choiceBText: this.state.answerB5,
            quizNum: this.state.quiz,
            id: parseInt(`${this.state.quiz}` + `${5}`) 
        };
        

        questions[5] = {
            text: this.state.text6,
            choiceAText: this.state.answerA6,
            choiceBText: this.state.answerB6,
            quizNum: this.state.quiz,
            id: parseInt(`${this.state.quiz}` + `${6}`) 
        };
        
      

        questions[6] = {
            text: this.state.text7,
            choiceAText: this.state.answerA7,
            choiceBText: this.state.answerB7,
            quizNum: this.state.quiz,
            id: parseInt(`${this.state.quiz}` + `${7}`) 
        };

        questions[7] = {
            text: this.state.text8,
            choiceAText: this.state.answerA8,
            choiceBText: this.state.answerB8,
            quizNum: this.state.quiz,
            id: parseInt(`${this.state.quiz}` + `${8}`) 
        };
        

         questions[8] = {
            text: this.state.text9,
            choiceAText: this.state.answerA9,
            choiceBText: this.state.answerB9,
            quizNum: this.state.quiz,
             id: parseInt(`${this.state.quiz}` + `${9}`) 
        };
        

        questions[9] = {
            text: this.state.text10,
            choiceAText: this.state.answerA10,
            choiceBText: this.state.answerB10,
            quizNum: this.state.quiz,
            id: parseInt(`${this.state.quiz + 1}` + `${0}`) 
        };
        
        questions.forEach(question => {
            
            this.props.createQuestion(question)
        })

        this.props.updateCreate({
            email: this.props.user.email, 
            quizNum: (this.state.quiz + 1)
        })

        this.props.history.push('/quizzes')
    }

    render() {
       
  

        return (
            <div className="quizzes-page-div">
                <div className="new-quizzes-div">

                    <div className="quiz-form-box">
                        <h1 className="quiz-form-header">Create a Quiz</h1>
                        <form className="quiz-form">
                            <label>Question 1</label>
                            <textarea placeholder="Question text..." value={this.state.text1} onChange={this.update('text1')}></textarea>
                            <div className="input-form-answers">
                                <input className="answer-A" type="text" placeholder="Answer 1" value={this.state.answerA1} onChange={this.update('answerA1')}></input> 
                                 <input  className="answer-B" type="text" placeholder="Answer 2" value={this.state.answerB1} onChange={this.update('answerB1')}></input>
                            </div>
                        </form>
                        <form className="quiz-form" >
                            <label>Question 2</label>
                            <textarea  placeholder="Question text..." value={this.state.text2} onChange={this.update('text2')}></textarea >
                            <div className="input-form-answers">
                                <input className="answer-A" type="text" placeholder="Answer 1" value={this.state.answerA2} onChange={this.update('answerA2')}></input> 
                                 <input  className="answer-B" type="text" placeholder="Answer 2" value={this.state.answerB2} onChange={this.update('answerB2')}></input>
                            </div>
                        </form>
                        <form className="quiz-form" >
                            <label>Question 3</label>
                            <textarea  placeholder="Question text..." value={this.state.text3} onChange={this.update('text3')}></textarea >
                            <div className="input-form-answers">
                                <input className="answer-A" type="text" placeholder="Answer 1" value={this.state.answerA3} onChange={this.update('answerA3')}></input> 
                                 <input  className="answer-B" type="text" placeholder="Answer 2" value={this.state.answerB3} onChange={this.update('answerB3')}></input>
                            </div>
                        </form>
                        <form className="quiz-form" >
                            <label>Question 4</label>
                            <textarea placeholder="Question text..." value={this.state.text4} onChange={this.update('text4')}></textarea >
                            <div className="input-form-answers">
                                <input className="answer-A" type="text" placeholder="Answer 1" value={this.state.answerA4} onChange={this.update('answerA4')}></input> 
                                 <input  className="answer-B" type="text" placeholder="Answer 2" value={this.state.answerB4} onChange={this.update('answerB4')}></input>
                            </div>
                        </form>
                        <form className="quiz-form" >
                            <label>Question 5</label>
                            <textarea  placeholder="Question text..." value={this.state.text5} onChange={this.update('text5')}></textarea >
                            <div className="input-form-answers">
                                <input className="answer-A" type="text" placeholder="Answer 1" value={this.state.answerA5} onChange={this.update('answerA5')}></input> 
                                 <input  className="answer-B" type="text" placeholder="Answer 2" value={this.state.answerB5} onChange={this.update('answerB5')}></input>
                            </div>
                        </form>
                        <form className="quiz-form" >
                            <label>Question 6</label>
                    
                            <textarea  type="text" placeholder="Question text..." value={this.state.text6} onChange={this.update('text6')}></textarea>
                            <div className="input-form-answers">
                                <input className="answer-A" type="text" placeholder="Answer 1" value={this.state.answerA6} onChange={this.update('answerA6')}></input> 
                                 <input  className="answer-B" type="text" placeholder="Answer 2" value={this.state.answerB6} onChange={this.update('answerB6')}></input>
                            </div>
                        </form>
                        <form className="quiz-form" >
                            <label>Question 7</label>
                            <textarea type="text" placeholder="Question text..." value={this.state.text7} onChange={this.update('text7')}></textarea>
                            <div className="input-form-answers">
                                <input className="answer-A" type="text" placeholder="Answer 1" value={this.state.answerA7} onChange={this.update('answerA7')}></input> 
                                 <input  className="answer-B" type="text" placeholder="Answer 2" value={this.state.answerB7} onChange={this.update('answerB7')}></input>
                            </div>
                        </form>
                        <form className="quiz-form" >
                            <label>Question 8</label>
                            <textarea type="text" placeholder="Question text..." value={this.state.text8} onChange={this.update('text8')}></textarea>
                            <div className="input-form-answers">
                                <input className="answer-A" type="text" placeholder="Answer 1" value={this.state.answerA8} onChange={this.update('answerA8')}></input> 
                                 <input  className="answer-B" type="text" placeholder="Answer 2" value={this.state.answerB8} onChange={this.update('answerB8')}></input>
                            </div>
                        </form>
                        <form className="quiz-form" >
                            <label>Question 9</label>
                            <textarea type="text" placeholder="Question text..." value={this.state.text9} onChange={this.update('text9')}>\</textarea>
                            <div className="input-form-answers">
                                <input className="answer-A" type="text" placeholder="Answer 1" value={this.state.answerA9} onChange={this.update('answerA9')}></input> 
                                 <input className="answer-B" type="text" placeholder="Answer 2" value={this.state.answerB9} onChange={this.update('answerB9')}></input>
                            </div>
                        </form>
                        <form className="quiz-form" >
                            <label>Question 10</label>
                            <textarea type="text" placeholder="Question text..." value={this.state.text10} onChange={this.update('text10')}></textarea>
                            <div className="input-form-answers">
                                <input className="answer-A" type="text" placeholder="Answer 1" value={this.state.answerA10} onChange={this.update('answerA10')}></input> 
                                 <input className="answer-B" type="text" placeholder="Answer 2" value={this.state.answerB10} onChange={this.update('answerB10')}></input>
                            </div>
                            <button className="create-submit" onClick={() => this.handleClick()}>Submit</button>
                        </form>
                       

                       
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateQuiz;