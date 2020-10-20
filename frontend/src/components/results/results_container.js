import { connect } from 'react-redux';
import ResultsPage from './results'
import { fetchAllQuestionsFromAQuiz } from '../../actions/quiz_actions'
// import { fetchQuestionData } from '../../actions/quiz_actions'

const mSTP = (state, ownProps) => {
    
    return {
        allPromptTexts: state.prompts,
        quiz: parseInt(ownProps.match.params.quizNum)
    };
}

const mDTP = (dispatch) => {
    return {
        fetchAllQuestionsFromAQuiz: promptId => dispatch(fetchAllQuestionsFromAQuiz(promptId))
    }
}

export default connect(mSTP, mDTP)(ResultsPage);