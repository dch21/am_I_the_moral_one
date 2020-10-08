import * as APIUtil from '../util/quiz_api_util'; 


export const RECEIVE_QUESTION = 'RECEIVE_QUESTION'; 
export const RECEIVE_ALL_QUESTIONS_FROM_A_QUIZ = 'RECEIVE_ALL_QUESTIONS_FROM_A_QUIZ';

 const receiveQuestion = question => ({
    type: RECEIVE_QUESTION, 
    question

})

const receiveAllQuestionsFromAQuiz = prompts => ({
    type: RECEIVE_ALL_QUESTIONS_FROM_A_QUIZ,
    prompts
})

export const fetchQuestion = questionId => dispatch =>  {
    console.log("hit fetchQuestion")
    return APIUtil.fetchQuizQuestion(questionId)
        .then(question => dispatch(receiveQuestion(question))
        )
}


export const fetchAllQuestionsFromAQuiz = promptId => dispatch => (
    APIUtil.fetchAllQuestionsFromAQuiz(promptId)
    .then(prompt => dispatch(receiveAllQuestionsFromAQuiz(prompt)))
    .catch(err => console.log(err))
)


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
