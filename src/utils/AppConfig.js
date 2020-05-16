import axios from "axios";

export const setAuthorizationHeader = (access_token) => {
	axios.defaults.headers.common = {
		"X-Requested-With": "XMLHttpRequest",
		"Content-Type": "application/json",
		Accept: "application/json",
		Authorization: `Bearer ${access_token}`,
	};
};
