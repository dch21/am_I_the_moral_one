import {RECEIVE_QUESTION} from '../actions/quiz_actions'
import { RECEIVE_ALL_QUESTIONS_FROM_A_QUIZ } from '../actions/quiz_actions'


const questionsReducer = (state = {}, action) => {
    Object.freeze(state); 
    let newState = Object.assign({}, state); 
    switch (action.type) {
        case RECEIVE_QUESTION:
            return Object.assign(newState, {[action.question.data._id]: action.question.data}); 
        case RECEIVE_ALL_QUESTIONS_FROM_A_QUIZ: 
            
            return Object.assign(newState, action.prompts.data)
        
        // let questionData = []

            // action.prompts.data.forEach(prompt => {
            //     questionData.push(prompt.question.text); 
            //     questionData.push(prompt.question.choiceAText)
            //     questionData.push(prompt.question.choiceBText)
            // })

           
        default:
            return state;
    }
}

export default questionsReducer; 