import { connect } from 'react-redux';
import { fetchTotal, fetchFirstQuestion} from '../../actions/quiz_actions'; 
import QuizIndex from './quiz_index'
import {fetchUser} from '../../actions/session_actions'; 

const mSTP = state => {
    // 
  return  {
      loggedInUser: state.session.user,
      total: state.totals[0].data || {}, //we got this from putting a  here showing how to key into total quizzes
      firstQuestion: Object.values(state.firstQuestion) || [],
      //    total: state.totals.length || {}
    }
}

const mDTP = dispatch => ({
    fetchTotalNumberOfQuizzes: () => dispatch(fetchTotal()),
    fetchFirstQuestion: id => dispatch(fetchFirstQuestion(id)),
    fetchUser: email => dispatch(fetchUser(email))
})

export default connect(mSTP, mDTP)(QuizIndex)