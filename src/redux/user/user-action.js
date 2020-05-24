import UserTypes from "./user-types";

export const setCurrentUser = (user) => ({
	type: UserTypes.SET_CURRENT_USER,
	payload: user,
});

export const setUserToken = (token) => ({
	type: UserTypes.SET_USER_TOKEN,
	payload: token,
});

export const logoutUser = () => ({
	type: UserTypes.LOGOUT_USER,
});

export const loginStart = (emailAndPassword) => ({
	type: UserTypes.LOGIN_START,
	payload: emailAndPassword,
});

export const loginSuccess = () => ({
	type: UserTypes.LOGIN_SUCCESS,
});

export const loginFailure = (error) => ({
	type: UserTypes.LOGIN_FAILURE,
	payload: error,
});

export const signUpStart = (userSignUpInfo) => ({
	type: UserTypes.SIGNUP_START,
	payload: userSignUpInfo,
});

export const signUpSuccess = () => ({
	type: UserTypes.SIGNUP_SUCCESS,
});

export const signUpFailure = (error) => ({
	type: UserTypes.SIGNUP_FAILURE,
	payload: error,
});
