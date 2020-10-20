import React from 'react'; 
import './quiz_form.scss'; 
import QuizItem from './quiz_item'; 
import {Link} from 'react-router-dom'; 

class QuizForm extends React.Component{
    constructor(props){
        super(props); 
        // this.state = {
        //     q1: '',
        //     q2: '',
        //     q3: '',
        //     q4: '',
        //     q5: '',
        //     q6: '',
        //     q7: '',
        //     q8: '',
        //     q9: '',
        //     q10: ''
        // }
        // this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleClick(){
     
    
        let user = this.props.user; 
        this.props.functions.map((choice, idx) => {
            this.props.updateQuizQuestion((idx + 1), 1, choice, user.age, user.education, user.politicalLeaning, user.religiousAffilation, user.gender, user.ethnicity, user.petChoice, user.location)
        })
        this.props.history.push('/results')
           
    }
    
    componentDidMount(){
         this.props.fetchQuestion(1)
         this.props.fetchQuestion(2)
         this.props.fetchQuestion(3)
         this.props.fetchQuestion(4)
         this.props.fetchQuestion(5)
         this.props.fetchQuestion(6)
         this.props.fetchQuestion(7)
         this.props.fetchQuestion(8)
         this.props.fetchQuestion(9)
         this.props.fetchQuestion(10)
    }


    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value 
        })
    }


    // handleSubmit(e){
    //     e.preventDefault(); 
    //     let response = {
    //         q1: this.state.q1,
    //         q2: this.state.q2,
    //         q3: this.state.q3,
    //         q4: this.state.q4,
    //         q5: this.state.q5,
    //         q6: this.state.q6,
    //         q7: this.state.q7,
    //         q8: this.state.q8,
    //         q9: this.state.q9,
    //         q10: this.state.q10
    //     }
    //     this.props.action(response); 
    // }

    render(){
        if (!this.props.question10.question) return null;
        const q1 = this.props.question1
        const q2 = this.props.question2
        const q3 = this.props.question3
        const q4 = this.props.question4
        const q5 = this.props.question5
        const q6 = this.props.question6
        const q7 = this.props.question7
        const q8 = this.props.question8
        const q9 = this.props.question9
        const q10 = this.props.question10
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