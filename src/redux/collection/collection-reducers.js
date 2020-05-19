import CollectionTypes from "./collection-types";

const collectionReducer = (state = null, action) => {
	switch (action.type) {
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
