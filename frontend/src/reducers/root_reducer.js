import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer'; 
import questions from './questions_reducer'; 
import prompts from  "./prompts_reducer";
import quizzes from "./quiz_reducer";

const RootReducer = combineReducers({
    session, 
    errors, 
    questions,
    prompts,
    quizzes
});

export default RootReducer;