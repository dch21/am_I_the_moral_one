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
        return(
            <div>
                <div>{innerQ.text}</div>
                <label> {innerQ.ChoiceAText}
                <input type="radio"
                        name={question._id}
                        id="answerChoiceA"
                        value="ChoiceA"
                        // onClick={() => functions[question._id - 1] = this.props.action(question._id, question.quizNum, "choiceA", user.age, user.education, user.politicalLeaning, user.religiousAffilation, user.gender, user.ethnicity, user.petChoice, user.location)}
                        onClick={() => this.handleClickA()}
                    >
                    </input>
                </label>
                <label> {innerQ.ChoiceBText}
                <input type="radio"
                        name={question._id}
                        id="answerChoiceB"
                        value="ChoiceB"
                        // onClick={() => functions[question._id - 1] = this.props.action(question._id, question.quizNum, "choiceB", user.age, user.education, user.politicalLeaning, user.religiousAffilation, user.gender, user.ethnicity, user.petChoice, user.location)}
                        onClick={() => this.handleClickB()}
                        >
                    </input>
                </label>
            </div>
        )
    }
}


export default QuizItem; 