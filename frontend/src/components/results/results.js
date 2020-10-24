import React from "react";
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import '../homepage/homepage.scss'
import MainPieChart from '../homepage/piechart_container'
// import DataVis from './data_vis'; 

class ResultsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            questionNumber: parseInt(`${this.props.quiz -1}` + `${1}`),
            quizNum: this.props.quiz, 
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllQuestionsFromAQuiz(this.props.quiz)
    }

    handleClick(dbQuestionNumber, questionNumber) {
        
        let current = document.getElementsByClassName('active-question');
        current[0].className = current[0].className.replace(' active-question', "")
        document.getElementById(questionNumber).className += " active-question"; 
        this.setState({
            questionNumber: dbQuestionNumber,
        })
    }

    render() {
         
        const texts = this.props.allPromptTexts;
        const demographicsArray = ["age", "ethnicity", "gender", "location", "petChoice", "religiousAffilation", "politicalLeaning", "education"]   
        
        return (
            <div>

            <div className="jake-result-master-div">
                <div className="quizzes-taken-directory">
                    <h1 className="quizzes-taken-header">Questions</h1>
                    <div className="quizzes-taken-links">
                        {texts.map ( (text, i) => {
                            if (i === 0){
                                return <button id={`${i + 1}`} className="question-taken-item active-question" onClick={() => this.handleClick(`${this.state.quizNum - 1}` + `${i + 1}`, `${i + 1}`)}>Question {i + 1}: {text.split(" ").slice(0, 4).join(" ")}...</button>
                            } 
                            
                            if (i === 9) {
                                return <button id={`${i + 1}`} className="question-taken-item" onClick={() => this.handleClick(`${this.state.quizNum}` + `${0}`, `${i + 1}`)}>Question {i + 1}: {text.split(" ").slice(0, 4).join(" ")}...</button>
                            } 
                            else {
                               return <button id={`${i + 1}`} className="question-taken-item" onClick={() => this.handleClick((`${this.state.quizNum - 1}` + `${i + 1}`), `${i + 1}`)}>Question {i + 1}: {text.split(" ").slice(0,4).join(" ")}...</button>
                        }})
                        }
                    </div>
                </div>
               
                <div className="jake-results-div">
                    <div className="jakes-data-box">                     
                        <MainPieChart demo={demographicsArray} questionNumber={this.state.questionNumber} />
                    </div>
                </div>

            </div>
            </div>
        );
    }
}

export default ResultsPage;