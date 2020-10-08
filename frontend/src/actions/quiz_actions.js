import * as APIUtil from '../util/quiz_api_util'; 

// export const RECEIVE_QUIZ_RESPONSE = 'RECEIVE_QUIZ_RESPONSE'; 
export const RECEIVE_QUESTION_DATA = 'RECEIVE_QUESTION_DATA';

export const receiveQuestionData = data => ({
    type: RECEIVE_QUESTION_DATA,
    data
});

export const fetchQuestionData = questionId => dispatch => (
    APIUtil.fetchQuestion(questionId)
        .then(data => dispatch(receiveQuestionData(data)))
        .catch(err => console.log(err))
);