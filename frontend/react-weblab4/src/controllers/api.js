import axios from 'axios';

const API_BASE_URL = 'http://localhost:10001/webapp/api';
export const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
});
