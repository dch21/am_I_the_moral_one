import React from 'react'; 

class QuizItem extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            KlassA: "quiz-question-a",
            KlassB: 'quiz-question-b'
        }
    }
    handleClickA(){
        this.props.functions[this.props.question._id -1] = 'choiceA'; 
        if(this.state.KlassA === 'quiz-question-a'){
            this.setState({KlassA: "select-a", KlassB: 'quiz-question-b'})} else {
                this.setState({KlassA: 'quiz-question-a'})
            }
        

    }
    handleClickB() {
        this.props.functions[this.props.question._id - 1] = 'choiceB';
        if(this.state.KlassB === 'quiz-question-b'){
            this.setState({KlassB: "select-b", KlassA: 'quiz-question-a' })} else {
                this.setState({KlassB: 'quiz-question-b'})
            }
    }
    render(){
    

        const {question, user, functions} = this.props; 
        const innerQ = question.question
        if(!innerQ) return null; 
        console.log(innerQ.choiceBText)  
        return(
            <div className="question-item">
                <div className='question-title'>{'Question' + " " + question._id}</div>
                <div>{innerQ.text}</div>
                <div className="question-buttons">
                    
                    <input 
                        
                        type="button"
                        className={this.state.KlassA}
                        name={question._id}
                        id="answerChoiceA"
                        value={innerQ.choiceAText}
                        // onClick={() => functions[question._id - 1] = this.props.action(question._id, question.quizNum, "choiceA", user.age, user.education, user.politicalLeaning, user.religiousAffilation, user.gender, user.ethnicity, user.petChoice, user.location)}
                        onClick={() => this.handleClickA()}
                    >
                    </input>
                   
                
                
                <input type="button"
                        className={this.state.KlassB}
                        name={question._id}
                        id="answerChoiceB"
                        value={innerQ.choiceBText}
                        // onClick={() => functions[question._id - 1] = this.props.action(question._id, question.quizNum, "choiceB", user.age, user.education, user.politicalLeaning, user.religiousAffilation, user.gender, user.ethnicity, user.petChoice, user.location)}
                        onClick={() => this.handleClickB()}
                        >
                    </input>
                </div>
            </div>
        )
    }
}


export default QuizItem; 