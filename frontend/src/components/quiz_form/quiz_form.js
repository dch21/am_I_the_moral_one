import React from 'react'; 
import './quiz_form.scss'; 
import QuizItem from './quiz_item'; 
import {Link} from 'react-router-dom'; 

class QuizForm extends React.Component{
    constructor(props){
        super(props); 
    }

    handleClick(){
        let user = this.props.user; 
        this.props.functions.map((choice, idx) => {
            let questionNumber = ((this.props.quizNum * 10) - 10 + idx + 1)
            this.props.updateQuizQuestion(questionNumber, this.props.quizNum, choice, user.age, user.education, user.politicalLeaning, user.religiousAffilation, user.gender, user.ethnicity, user.petChoice, user.location)
        })
        this.props.history.push(`/results/${this.props.quizNum}`)    
    }
    
    componentDidMount(){
        
         this.props.fetchAllQuestions(this.props.quizNum)

    }


    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value 
        })
    }



    render(){
        
        if (Object.keys(this.props.questions).length === 0) return null;
        const q1 = this.props.questions[0].question 
        const q2 = this.props.questions[1].question 
        const q3 = this.props.questions[2].question 
        const q4 = this.props.questions[3].question 
        const q5 = this.props.questions[4].question 
        const q6 = this.props.questions[5].question 
        const q7 = this.props.questions[6].question 
        const q8 = this.props.questions[7].question 
        const q9 = this.props.questions[8].question 
        const q10 = this.props.questions[9].question 
     
        
return(
    <div className='quiz-form-div' > 
        <div className='results-link-div'>
            <div></div>
            <Link to={`/results/${this.props.quizNum}`} className="go-right-to-results">Go right to results</Link>

        </div>
        <QuizItem questionNumber='1' question={q1} action={this.props.updateQuizQuestion} user={this.props.user} functions={this.props.functions}/> 
        <QuizItem questionNumber='2' question={q2} action={this.props.updateQuizQuestion} user={this.props.user} functions={this.props.functions}/> 
        <QuizItem questionNumber='3' question={q3} action={this.props.updateQuizQuestion} user={this.props.user} functions={this.props.functions}/> 
        <QuizItem questionNumber='4' question={q4} action={this.props.updateQuizQuestion} user={this.props.user} functions={this.props.functions} /> 
        <QuizItem questionNumber='5' question={q5} action={this.props.updateQuizQuestion} user={this.props.user} functions={this.props.functions} /> 
        <QuizItem questionNumber='6' question={q6} action={this.props.updateQuizQuestion} user={this.props.user} functions={this.props.functions}/> 
        <QuizItem questionNumber='7' question={q7} action={this.props.updateQuizQuestion} user={this.props.user} functions={this.props.functions} /> 
        <QuizItem questionNumber='8' question={q8} action={this.props.updateQuizQuestion} user={this.props.user} functions={this.props.functions}/> 
        <QuizItem questionNumber='9' question={q9} action={this.props.updateQuizQuestion} user={this.props.user} functions={this.props.functions} /> 
        <QuizItem questionNumber='10' question={q10} action={this.props.updateQuizQuestion} user={this.props.user} functions={this.props.functions}/> 
        <div className="quiz-submit-div">
        <button className="quiz-submit" onClick={() => this.handleClick()}>Submit</button>
        </div>
    </div>
)
        
    }

}

export default QuizForm; 