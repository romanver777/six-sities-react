import axios from 'axios';

const createAPI = (onUnauthorized) => {

	const api = axios.create({
		baseUrl: ``,
		timeout: 1000 * 5,
		withCredentials: true,
	});

	const onSuccess = (response) => response;

	const onFail = (error) => {

		if (error.response.status === 403) {

			onUnauthorized();
		}

		return error;
	};

	api.interceptors.response.use(onSuccess, onFail);

	return api;
};

export default createAPI;
