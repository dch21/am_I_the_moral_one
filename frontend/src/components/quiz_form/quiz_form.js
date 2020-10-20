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
            this.props.updateQuizQuestion((idx + 1), this.props.quizNum, choice, user.age, user.education, user.politicalLeaning, user.religiousAffilation, user.gender, user.ethnicity, user.petChoice, user.location)
        })
        this.props.history.push('/results')    
    }
    
    componentDidMount(){
         this.props.fetchAllQuestions(this.props.quizNum)
        //  this.props.fetchQuestion(2)
        //  this.props.fetchQuestion(3)
        //  this.props.fetchQuestion(4)
        //  this.props.fetchQuestion(5)
        //  this.props.fetchQuestion(6)
        //  this.props.fetchQuestion(7)
        //  this.props.fetchQuestion(8)
        //  this.props.fetchQuestion(9)
        //  this.props.fetchQuestion(10)
    }


    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value 
        })
    }



    render(){
        if (!this.props.question10.question) return null;
        const q1 = this.props.questions[0]
        const q2 = this.props.questions[1]
        const q3 = this.props.questions[2]
        const q4 = this.props.questions[3]
        const q5 = this.props.questions[4]
        const q6 = this.props.questions[5]
        const q7 = this.props.questions[6]
        const q8 = this.props.questions[7]
        const q9 = this.props.questions[8]
        const q10 = this.props.questions[9]
return(
    <div> 
        <div className='results-link-div'>
            <div></div>
            <Link to={'/results'} className="go-right-to-results">Go right to results</Link>

        </div>
        <QuizItem question={q1} action={this.props.updateQuizQuestion} user={this.props.user} functions={this.props.functions}/> 
        <QuizItem question={q2} action={this.props.updateQuizQuestion} user={this.props.user} functions={this.props.functions}/> 
        <QuizItem question={q3} action={this.props.updateQuizQuestion} user={this.props.user} functions={this.props.functions}/> 
        <QuizItem question={q4} action={this.props.updateQuizQuestion} user={this.props.user} functions={this.props.functions} /> 
        <QuizItem question={q5} action={this.props.updateQuizQuestion} user={this.props.user} functions={this.props.functions} /> 
        <QuizItem question={q6} action={this.props.updateQuizQuestion} user={this.props.user} functions={this.props.functions}/> 
        <QuizItem question={q7} action={this.props.updateQuizQuestion} user={this.props.user} functions={this.props.functions} /> 
        <QuizItem question={q8} action={this.props.updateQuizQuestion} user={this.props.user} functions={this.props.functions}/> 
        <QuizItem question={q9} action={this.props.updateQuizQuestion} user={this.props.user} functions={this.props.functions} /> 
        <QuizItem question={q10} action={this.props.updateQuizQuestion} user={this.props.user} functions={this.props.functions}/> 
        <div className="quiz-submit-div">
        <button className="quiz-submit" onClick={() => this.handleClick()}>Submit</button>
        </div>
    </div>
)
        
    }

}

export default QuizForm; 