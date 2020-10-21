import { connect } from 'react-redux';
import { fetchTotal, fetchFirstQuestion} from '../../actions/quiz_actions'; 
import QuizIndex from './quiz_index'


const mSTP = state => {
    // debugger
  return  {
      total: state.totals[0].data || {}, //we got this from putting a debugger here showing how to key into total quizzes
      firstQuestion: Object.values(state.firstQuestion) || [],
      //    total: state.totals.length || {}
    }
}

const mDTP = dispatch => ({
    fetchTotalNumberOfQuizzes: () => dispatch(fetchTotal()),
    fetchFirstQuestion: id => dispatch(fetchFirstQuestion(id))
})

export default connect(mSTP, mDTP)(QuizIndex)