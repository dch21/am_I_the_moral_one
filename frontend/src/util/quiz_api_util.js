import axios from 'axios';



export const submitQuiz = (userData) => {
    return axios.post('/api/quizzes/submit', userData);
};

export const fetchQuestion = (id) => {
    return axios.get(`/api/quizzes/${id}`)
}