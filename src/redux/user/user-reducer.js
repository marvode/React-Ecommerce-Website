import UserTypes from "./user-types";

const INITIAL_STATE = {
	currentUser: null,
	currentUserToken: null,
	loggingIn: false,
	signingUp: false,
	loginError: null,
	signUpError: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserTypes.LOGIN_START:
			return {
				...state,
				loggingIn: true,
			};
		case UserTypes.LOGIN_SUCCESS:
			return {
				...state,
				loggingIn: false,
				loginError: null,
			};
		case UserTypes.LOGIN_FAILURE:
			return {
				...state,
				loginError: action.payload.error,
				loggingIn: false,
			};
		case UserTypes.SIGNUP_START:
			return {
				...state,
				signingUp: true,
			};
		case UserTypes.SIGNUP_SUCCESS:
			return {
				...state,
				signingUp: false,
			};
		case UserTypes.SIGNUP_FAILURE:
			return {
				...state,
				signUpError: action.payload.error,
				signingUp: false,
			};
		case UserTypes.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload,
			};
		case UserTypes.SET_USER_TOKEN:
			return {
				...state,
				currentUserToken: action.payload,
			};
		case UserTypes.LOGOUT_USER:
			return {
				...state,
				currentUser: null,
				currentUserToken: null,
			};
		default:
			return state;
	}
};

export default userReducer;
