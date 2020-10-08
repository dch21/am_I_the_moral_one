import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer'; 
import quizzes from './quiz_reducer';

const RootReducer = combineReducers({
    session, 
    errors,
    quizzes
});

export default RootReducer;