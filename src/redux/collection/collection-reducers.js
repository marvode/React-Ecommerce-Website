import CollectionTypes from "./collection-types";

const INITIAL_STATE = {
	collection: null,
	isFetchingCollection: false,
	errorMessage: undefined,
};

const collectionReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CollectionTypes.FETCH_COLLECTION_START:
			return {
				...state,
				isFetchingCollection: true,
			};
		case CollectionTypes.FETCH_COLLECTION_SUCCESS:
			return {
				...state,
				collection: action.payload,
				isFetchingCollection: false,
			};
		case CollectionTypes.FETCH_COLLECTION_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
				isFetchingCollection: false,
			};
		case CollectionTypes.ADD_COLLECTION:
			return {
				...state,
				collection: action.payload,
			};
		default:
			return state;
	}
};

export default collectionReducer;
