import { connect } from 'react-redux';
import MainPieChart from './pie_chart';
import { fetchQuestionData } from '../../actions/quiz_actions'

const mSTP = state => {
    
    return {
        questionData: state.quizzes
            // .data.question.questionChoices.choiceA.demo
    };
}

const mDTP = (dispatch) => {
    return {
        fetchQuestionData: questionId => dispatch(fetchQuestionData(questionId))
    }
}

export default connect(mSTP, mDTP)(MainPieChart);