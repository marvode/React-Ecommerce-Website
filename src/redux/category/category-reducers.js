import CategoryTypes from "./category-types";

const INITIAL_STATE = {
	categories: [],
};

export const categoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CategoryTypes.ADD_CATEGORIES:
			return {
				...state,
				categories: action.payload,
			};
		default:
			return state;
	}
};
