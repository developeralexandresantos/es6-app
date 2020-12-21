import axios from 'axios';

const api = axios.create({
    // baseURL: 'https://cadcliapi.azurewebsites.net/',
    baseURL: 'http://localhost:8080/',
});

export default api;