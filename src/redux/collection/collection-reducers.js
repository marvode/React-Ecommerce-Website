import CollectionTypes from "./collection-types";

const INITIAL_STATE = {
	collection: [],
};

const collectionReducer = (state = INITIAL_STATE, action) => {
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
