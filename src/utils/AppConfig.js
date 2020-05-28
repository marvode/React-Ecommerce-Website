import axios from "axios";

import { setUserToken, logoutUser } from "../redux/user/user-action";
import { put } from "redux-saga/effects";
import { store } from "../redux/store";

export const setAuthorizationHeader = (access_token) =>
	(axios.defaults.headers["Authorization"] = `Bearer ${access_token}`);

export const filterRequest = (refresh_token) => {
	axios.interceptors.response.use(
		(response) => {
			return response;
		},
		(err) => {
			return new Promise((resolve, reject) => {
				const originalReq = err.config;
				if (
					err.response.status === 401 &&
					err.config &&
					!err.config.__isRetryRequest
				) {
					originalReq._retry = true;

					let res = fetch("http://127.0.0.1:8000/oauth/token", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							Device: "device",
							Accept: "application/json",
						},
						redirect: "follow",
						referrer: "no-referrer",
						body: JSON.stringify({
							grant_type: "refresh_token",
							refresh_token: refresh_token,
						}),
					})
						.then((res) => res.json())
						.then((res) => {
							if (res.error) {
								store.dispatch(logoutUser());
								return reject(res);
							}
							store.dispatch(
								setUserToken({
									access_token: res.access_token,
									refresh_token: res.refresh_token,
								})
							);
							originalReq.headers[
								"Authorization"
							] = `Bearer ${res.access_token}`;
							originalReq.headers["Device"] = "device";

							return axios(originalReq);
						})
						.catch((err) => {
							console.log(err);
							put(logoutUser());
						});

					resolve(res);
				}

				return Promise.reject(err);
			});
		}
	);
};
