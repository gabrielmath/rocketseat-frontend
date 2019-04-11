import axios from 'axios';

const api = axios.create({
	baseURL: 'https://rocketseat-back.herokuapp.com'
});

export default api;
