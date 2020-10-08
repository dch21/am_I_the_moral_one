import {RECEIVE_QUESTION} from '../actions/quiz_actions'


const questionsReducer = (state = {}, action) => {
    Object.freeze(state); 
    let newState = Object.assign({}, state); 
    switch (action.type) {
        case RECEIVE_QUESTION:
            return Object.assign(newState, {[action.question.id]: action.question})
        default:
            return state;
    }
}

export default questionsReducer; 