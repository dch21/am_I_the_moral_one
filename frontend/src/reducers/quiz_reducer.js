import { RECEIVE_QUESTION_DATA } from '../actions/quiz_actions';

const QuizzesReducer = (state = { quizzes: { questionData: { data: { question: { questionChoices: { choiceA: { demo: null } } } } } } }, action) => {
    Object.freeze(state);
    // let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_QUESTION_DATA:
            return action.data;
        default:
            return state;
    }
};

export default QuizzesReducer;