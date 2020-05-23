import axios from "axios";

import CategoryTypes from "./category-types";

export const fetchCategoriesStart = () => ({
	type: CategoryTypes.FETCH_CATEGORIES_START,
});

export const fetchCategoriesSuccess = (categories) => ({
	type: CategoryTypes.FETCH_CATEGORIES_SUCCESS,
	payload: categories,
});

export const fetchCategoriesFailure = (errorMessage) => ({
	type: CategoryTypes.FETCH_CATEGORIES_FAILURE,
	payload: errorMessage,
});

export const fetchCategoriesAsync = () => {
	return (dispatch) => {
		dispatch(fetchCategoriesStart());
		axios
			.get("/categories")
			.then((res) => dispatch(fetchCategoriesSuccess(res.data.data)))
			.catch((error) => dispatch(fetchCategoriesFailure(error)));
	};
};
