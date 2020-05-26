import React, { useEffect } from "react";
import { connect } from "react-redux";

import CategoryContainer from "../containers/category.container";

import { fetchCategoriesStart } from "../redux/category/category-actions";

const Homepage = ({ fetchCategoriesStart }) => {
	useEffect(() => {
		fetchCategoriesStart();
	}, [fetchCategoriesStart]);

	return <CategoryContainer />;
};

const mapDispatchToProps = (dispatch) => ({
	fetchCategoriesStart: () => dispatch(fetchCategoriesStart()),
});

export default connect(null, mapDispatchToProps)(Homepage);
