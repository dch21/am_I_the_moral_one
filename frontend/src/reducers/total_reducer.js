import { RECEIVE_TOTAL_NUMBER_QUIZZES } from "../actions/quiz_actions";


const totalQuizzesReducer = (state = [1], action) => {
    Object.freeze(state); 

    switch (action.type) {
      case RECEIVE_TOTAL_NUMBER_QUIZZES:
        return [action.number]

      default:
        return state;
    }
}

export default totalQuizzesReducer; 