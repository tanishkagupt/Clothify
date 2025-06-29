
import axios from 'axios';

// const DEPLOYED='https://pear-poised-hen.cyclic.app/' just example
const LOCALHOST='http://localhost:5454'; // Change this to your local server URL or deployed server URL



export const API_BASE_URL = LOCALHOST;

const api = axios.create({
  baseURL: API_BASE_URL,
});

const token = localStorage.getItem('jwt');

api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
