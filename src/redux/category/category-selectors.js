import { createSelector } from "reselect";

const selectCategory = (state) => state.categories;

export const selectCategorySections = createSelector(
	[selectCategory],
	(category) => category.sections
);
