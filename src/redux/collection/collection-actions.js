import axios from "axios";

import CollectionTypes from "./collection-types";

const fetchCollectionStart = () => ({
	type: CollectionTypes.FETCH_COLLECTION_START,
});

const fetchCollectionSuccess = (collection) => ({
	type: CollectionTypes.FETCH_COLLECTION_SUCCESS,
	payload: collection,
});

const fetchCollectionFailure = (error) => ({
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
