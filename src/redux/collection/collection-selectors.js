import { createSelector } from "reselect";

const selectCollection = (state) => state.collection;

export const selectCollections = createSelector(
	[selectCollection],
	(collection) => collection.collection
);

export const selectACollection = (categoryId) => {
	return createSelector(
		[selectCollection],
		(collection) => collection.collection[categoryId]
	);
};

export const selectIsCollectionFetching = createSelector(
	[selectCollection],
	(collection) => collection.isFetchingCollection
);

export const selectIsCollectionLoaded = createSelector(
	[selectCollection],
	(collection) => !!collection.collection
);
