import { connect } from 'react-redux';
import {fetchTotal} from '../../actions/quiz_actions'; 
import QuizIndex from './quiz_index'


const mSTP = state => {
  return  {
   total: state.totals.length || {}
    }
}

const mDTP = dispatch => ({
    fetchTotalNumberOfQuizzes: () => dispatch(fetchTotal())
})

export default connect(mSTP, mDTP)(QuizIndex)