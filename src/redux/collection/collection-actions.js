import axios from "axios";

import CollectionTypes from "./collection-types";

export const fetchCollectionStart = (categoryId) => ({
	type: CollectionTypes.FETCH_COLLECTION_START,
	categoryId,
});

export const fetchCollectionSuccess = (collection) => ({
	type: CollectionTypes.FETCH_COLLECTION_SUCCESS,
	payload: collection,
});

export const fetchCollectionFailure = (error) => ({
	type: CollectionTypes.FETCH_COLLECTION_FAILURE,
	payload: error,
});

export const fetchCollectionStartAsync = (categoryId) => {
	return (dispatch) => {
		dispatch(fetchCollectionStart());
		axios
			.get(`/categories/${categoryId}/products`)
			.then((res) => {
				dispatch(fetchCollectionSuccess(res.data.data));
			})
			.catch((error) => dispatch(fetchCollectionFailure(error)));
	};
};
