import { createSelector } from "reselect";

const selectCollection = (state) => state.collection;

export const selectCollections = createSelector(
	[selectCollection],
	(collection) => collection.collection
);

export const selectIsCollectionFetching = createSelector(
	[selectCollection],
	(collection) => collection.isFetchingCollection
);

export const selectIsCollectionLoaded = createSelector(
	[selectCollection],
	(collection) => !!collection.collection
);
