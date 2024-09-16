
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api', // Base URL of your backend
    timeout: 5000, // Timeout after 5 seconds
});

export default instance;