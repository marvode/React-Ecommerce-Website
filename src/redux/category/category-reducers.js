import CategoryTypes from "./category-types";

const INITIAL_STATE = {
	categories: null,
	isFetchingCategory: false,
	errorMessage: undefined,
};

export const categoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CategoryTypes.FETCH_CATEGORIES_START:
			return {
				...state,
				isFetchingCategory: true,
			};
		case CategoryTypes.FETCH_CATEGORIES_SUCCESS:
			return {
				...state,
				isFetchingCategory: false,
				categories: action.payload,
			};
		case CategoryTypes.FETCH_CATEGORIES_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
				isFetchingCategory: false,
			};
		// case CategoryTypes.ADD_CATEGORIES:
		// 	return {
		// 		...state,
		// 		categories: action.payload,
		// 	};
		default:
			return state;
	}
};
