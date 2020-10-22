import { RECEIVE_FETCHED_USER } from "../actions/session_actions";


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_FETCHED_USER:
            return action.fetchedUser
        default:
            return state;
    }
}

export default usersReducer; 