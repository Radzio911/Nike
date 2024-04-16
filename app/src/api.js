import axios from "axios";

export const API_URL = "http://localhost:2222";

export const API = (path, params) => {
	return API_URL + "/" + path.join("/");
};

export const fetcher = axios.create({
	baseURL: API_URL,
	withCredentials: true,
	headers: { "Content-Type": "multipart/form-data" },
});

export const FETCH = (url, data) => {
	const formData = new FormData();

	Object.keys(data).forEach((key) => {
		formData.append(key, data[key]);
	});

	return fetcher.post(url, formData);
};
