import CollectionTypes from "./collection-types";

export const addCollection = (item) => ({
	type: CollectionTypes.ADD_COLLECTION,
	payload: item,
});
