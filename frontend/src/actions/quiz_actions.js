import * as APIUtil from '../util/quiz_api_util'; 


export const RECEIVE_QUESTION = 'RECEIVE_QUESTION'; 

 const receiveQuestion = question => ({
    type: RECEIVE_QUESTION, 
    question

})

export const fetchQuestion = questionId => dispatch =>  {
    console.log("hit fetchQuestion")
    return APIUtil.fetchQuizQuestion(questionId)
        .then(question => dispatch(receiveQuestion(question))
        )
}



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
