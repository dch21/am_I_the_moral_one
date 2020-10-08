import React from 'react'; 

class QuizItem extends React.Component{
    handleClickA(){
        this.props.functions[this.props.question._id -1] = 'choiceA'; 
        console.log(this.props.functions); 
    }
    handleClickB() {
        this.props.functions[this.props.question._id - 1] = 'choiceB';
        console.log(this.props.functions);
    }
    render(){
      
        const {question, user, functions} = this.props; 
        const innerQ = question.question
        if(!innerQ) return null; 
        debugger
        console.log(innerQ.choiceBText)  
        return(
            <div className="question-item">
                <div className='question-title'>{'Question' + " " + question._id}</div>
                <div>{innerQ.text}</div>
                <div className="question-buttons">
                    
                    <input 
                        
                        type="button"
                        className="quiz-button-a"
                        name={question._id}
                        id="answerChoiceA"
                        value={innerQ.choiceAText}
                        // onClick={() => functions[question._id - 1] = this.props.action(question._id, question.quizNum, "choiceA", user.age, user.education, user.politicalLeaning, user.religiousAffilation, user.gender, user.ethnicity, user.petChoice, user.location)}
                        onClick={() => this.handleClickA()}
                    >
                    </input>
                   
                
                
                <input type="button"
                        className="quiz-button-b"
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