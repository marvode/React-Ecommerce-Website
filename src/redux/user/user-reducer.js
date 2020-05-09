import { SET_CURRENT_USER, SET_USER_TOKEN } from "../constants";

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
		default:
			return state;
	}
};

export default userReducer;
