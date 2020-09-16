import axios from 'axios';

const api = axios.create({
    baseURL: 'https://cadcliapi.azurewebsites.net/',
});

export default api;