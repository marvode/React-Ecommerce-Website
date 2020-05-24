import { takeLatest, put, call, all } from "redux-saga/effects";
import axios from "axios";

import UserTypes from "./user-types";
import {
	loginFailure,
	loginSuccess,
	setCurrentUser,
	setUserToken,
	signUpFailure,
	loginStart,
} from "./user-action";
import { setAuthorizationHeader } from "../../utils/AppConfig";

export function* loginAsync(action) {
	try {
		const response = yield axios.post("/oauth/token", action.payload);
		yield call(setAuthorizationHeader, response.data.access_token);
		yield put(
			setUserToken({
				access_token: response.data.access_token,
				refresh_token: response.data.refresh_token,
			})
		);
		yield put(loginSuccess());
	} catch (error) {
		yield put(loginFailure(error.response.data));
	}
}

export function* onLoginSuccess() {
	try {
		const userInfo = yield axios.get("/users/me");
		yield put(setCurrentUser(userInfo.data.data));
		yield (window.location = "/");
	} catch (error) {
		yield console.log("Couldn't get user information");
	}
}

export function* getUserInfo() {
	yield takeLatest(UserTypes.LOGIN_SUCCESS, onLoginSuccess);
}

export function* onLoginStart() {
	yield takeLatest(UserTypes.LOGIN_START, loginAsync);
}

export function* signupAsync(action) {
	try {
		yield axios.post("/users", action.payload);
		const username = yield action.payload.email;
		const password = yield action.payload.password;
		yield put(loginStart({ username, password }));
	} catch (error) {
		yield put(signUpFailure(error.response.data));
	}
}

export function* onSignupStart() {
	yield takeLatest(UserTypes.SIGNUP_START, signupAsync);
}

export default function* userSagas() {
	yield all([call(onLoginStart), call(getUserInfo), call(onSignupStart)]);
}
