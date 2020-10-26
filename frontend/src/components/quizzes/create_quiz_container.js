import { connect } from 'react-redux';
import CreateQuiz from './create_quiz'
import { fetchQuestion, fetchTotal } from '../../actions/quiz_actions';
import { updateQuizQuestion } from '../../util/quiz_api_util';
import { withRouter } from 'react-router-dom'; 
import {createQuestion} from '../../util/quiz_api_util'; 
import {updateCreate} from '../../util/session_api_util';

const mSTP = (state) => ({
    //totalQuizzes is amount of 10 question Quizzes
    totalQuizzes: state.totals,
    user: state.session.user,
  
})

const mDTP = dispatch => {
    // 
    return {
        fetchTotal: () => dispatch(fetchTotal()),
        fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
        updateQuizQuestion: (choice, quizNum, questionId, age, Education, PoliticalLeaning, ReligiousAffilation, Gender, Ethnicity, PetChoice, location) => (updateQuizQuestion(choice, quizNum, questionId, age, Education, PoliticalLeaning, ReligiousAffilation, Gender, Ethnicity, PetChoice, location)),
        createQuestion: (quiz) => (createQuestion(quiz)),
        updateCreate: (data) => updateCreate(data)
    }
   
}

export default withRouter(connect(mSTP, mDTP)(CreateQuiz)); 