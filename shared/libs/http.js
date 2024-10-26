import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	timeout: 10000,
	timeoutErrorMessage: 'Request timed out',
	headers: {
		'Content-type': 'application/json',
	},
});

instance.interceptors.request.use(
	async (config) => {

		if (config.headers) {
			config.headers['X-Client-Timezone'] =
				Intl.DateTimeFormat().resolvedOptions().timeZone;
		}

		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		throw error;
	}
);

export const deleteRequest = async({
	url,
	data,
	config,
}) => {
	try {
		const response = await instance.delete(url, {
			data,
			...config,
		});

		return response.data;
	} catch (error) {
		throw error;
	}
};

export const getRequest = async({
	url,
	params,
	config,
}) => {
	try {
		const response = await instance.get(url, {
			params,
			...config,
		});

		return response.data;
	} catch (error) {
		throw error;
	}
};

export const postRequest = async({
	url,
	data,
	config,
	useOTALibrary,
}) => {
	try {
		const response = await instance.post(url, data, {
			...config,
		});
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const putRequest = async({
	url,
	data,
	config,
}) => {
	try {
		const response = await instance.put(url, data, {
			...config,
		});
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const http = {
	deleteRequest,
	getRequest,
	postRequest,
	putRequest,
	config: instance.defaults,
};
