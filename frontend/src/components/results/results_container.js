import { connect } from 'react-redux';
import Results from './results'

import { fetchQuestionData } from '../../actions/quiz_actions'

const mSTP = state => {
    // debugger
    return {
        questionIDs: state.quizzes
        // .data.question.questionChoices.choiceA.demo
    };
}

const mDTP = (dispatch) => {
    return {
        fetchQuestionData: questionId => dispatch(fetchQuestionData(questionId))
    }
}

export default connect(mSTP, mDTP)(MainPieChart);