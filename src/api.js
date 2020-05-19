import axios from 'axios';

const api = axios.create({
	baseUrl: `/`,
	timeout: 5000,
	withCredentials: true,
});

export default api;
