import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
	Specials: 1,
	Phones: 2,
	Laptops: 3,
	Electronics: 4,
	Men_Clothing: 5,
	Women_Clothing: 6,
	Music: 7,
	Art: 8,
};

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
	[selectShop],
	(shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) => {
	const modifiedName = collectionUrlParam.replace(" ", "_");
	return createSelector([selectCollections], (collections) =>
		collections.find(
			(collection) => collection.id === COLLECTION_ID_MAP[modifiedName]
		)
	);
};
