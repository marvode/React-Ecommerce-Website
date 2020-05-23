import { takeLatest, put, call, all } from "redux-saga/effects";
import axios from "axios";

import UserTypes from "./user-types";
import {
	loginFailure,
	loginSuccess,
	setCurrentUser,
	setUserToken,
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
		const userInfo = yield axios.get("/users/me");
		yield put(setCurrentUser(userInfo.data.data));
		yield put(loginSuccess());
	} catch (error) {
		yield put(loginFailure(error));
	}
}

export function* onLoginStart() {
	yield takeLatest(UserTypes.LOGIN_START, loginAsync);
}

export default function* userSagas() {
	yield all([call(onLoginStart)]);
}
