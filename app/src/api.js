export const API_URL = "http://localhost:2222";

export const API = (path, params) => {
	return API_URL + "/" + path.join("/");
};
