import { connect } from 'react-redux'; 
import QuizForm from './quiz_form'

 const mSTP = (state, ownProps) => ({
     quiz: state.entities.quizes[ownProps.match.params.quizId]
 })

 const mDTP = dispatch => ({
     
 })

 export default connect(mSTP, mDTP)(QuizForm); 