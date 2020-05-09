import { SET_CURRENT_USER, SET_USER_TOKEN } from "../constants";

export const setCurrentUser = (user) => ({
	type: SET_CURRENT_USER,
	payload: user,
});

export const setUserToken = (token) => ({
	type: SET_USER_TOKEN,
	payload: token,
})