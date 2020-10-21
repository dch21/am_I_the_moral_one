import { connect } from 'react-redux';
import {fetchTotal} from '../../actions/quiz_actions'; 
import QuizIndex from './quiz_index'


const mSTP = state => {
  return  {
   total: state.total.length || {}
    }
}

const mDTP = dispatch => ({
    fetchTotalNumberOfQuizzes: () => dispatch(fetchTotal())
})

export default connect(mSTP, mDTP)(QuizIndex)