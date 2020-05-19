import { createSelector } from "reselect";

const selectCategory = (state) => state.categories;

export const selectCategorySections = createSelector(
	[selectCategory],
	(category) => category.sections
);

export const selectCategories = createSelector(
	[selectCategory],
	(category) => category.categories
);
