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



