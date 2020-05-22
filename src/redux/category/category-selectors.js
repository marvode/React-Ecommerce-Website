import { createSelector } from "reselect";

const selectCategory = (state) => state.categories;

// export const selectCategorySections = createSelector(
// 	[selectCategory],
// 	(category) => category.sections
// );

export const selectCategories = createSelector(
	[selectCategory],
	(categories) => categories.categories
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
