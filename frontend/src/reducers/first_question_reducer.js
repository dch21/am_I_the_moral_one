import { RECEIVE_FIRST_QUESTION } from "../actions/quiz_actions";


const firstQuestionReducer = (state = [], action) => {
    
    Object.freeze(state);
    
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_FIRST_QUESTION:
            // return [action.questionObject.data.question.text]
            return Object.assign(newState, { [action.questionObject.data._id]: action.questionObject.data.question.text})
        default:
            return state;
    }
}

export default firstQuestionReducer; 