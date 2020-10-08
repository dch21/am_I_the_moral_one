import { RECEIVE_ALL_QUESTIONS_FROM_A_QUIZ } from '../actions/quiz_actions'

const promptsReducer = (state = [], action) => {
    Object.freeze(state);
    // let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_QUESTIONS_FROM_A_QUIZ:
        let text = []
        
        action.prompts.data.forEach ( prompt => {
            text.push(prompt.question.text)
        })
        
            return text
        default:
            return state;
    }
}

export default promptsReducer; 