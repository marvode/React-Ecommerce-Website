import CategoryTypes from "./category-types";

export const addCategories = (item) => ({
	type: CategoryTypes.ADD_CATEGORIES,
	payload: item,
});
