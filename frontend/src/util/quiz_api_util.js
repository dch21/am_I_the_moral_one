import axios from 'axios';



export const submitQuiz = (userData) => {
    return axios.post('/api/quiz/submit', userData);
};

