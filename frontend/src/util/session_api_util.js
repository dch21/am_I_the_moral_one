import axios from 'axios';

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export const signup = (userData) => {
    return axios.post('/api/users/register', userData);
};

export const login = (userData) => {
    return axios.post('/api/users/login', userData);
};

export const updateSubmit = (data) => {
    return axios.patch('/api/users/updateSubmit', data)
}

export const updateCreate = (data) => {
    return axios.patch('/api/users/updateCreate', data)
}

export const updateAnswers = (data) => {
    return axios.patch('/api/users/updateAnswers', data)
}

export const fetchUserInfo = email => {
    return axios.get('/api/users/fetchUserInfo', {
        params: {
            email: email
        }
    })
}

