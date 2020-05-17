import React from "react";
import { connect } from "react-redux";

import Category from "../components/Category";
import { selectCategorySections } from "../redux/category/category-selectors";

const Homepage = ({ categories }) => {
	return (
		<div>
			<Category data={categories} />
		</div>
	);
};

const mapStateToProps = (state) => ({
	categories: selectCategorySections(state),
});

export default connect(mapStateToProps)(Homepage);
