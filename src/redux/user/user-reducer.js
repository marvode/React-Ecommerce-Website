import { SET_CURRENT_USER, SET_USER_TOKEN, LOGOUT_USER } from "../constants";

const INITIAL_STATE = {
	currentUser: null,
	currentUserToken: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload,
			};
		case SET_USER_TOKEN:
			return {
				...state,
				currentUserToken: action.payload,
			}
		case LOGOUT_USER:
			return {
				...state,
				currentUser: null,
				currentUserToken: null,
			}
		default:
			return state;
	}
};

export default userReducer;
