import { createSelector } from "reselect";

const selectCategory = (state) => state.categories;

export const selectCategories = createSelector(
	[selectCategory],
	(categories) => categories.categories
);

export const selectIsCategoryFetching = createSelector(
	[selectCategory],
	(categories) => categories.isFetchingCategory
);

export const selectIsCategoryLoaded = createSelector(
	[selectCategory],
	(categories) => !!categories.categories
);
export const selectCategoryId = (categoryName) => {
	return createSelector(
		[selectCategory],
		(categories) =>
			categories.categories.filter(
				(category) => category.name === categoryName
			)[0].id
	);
};
