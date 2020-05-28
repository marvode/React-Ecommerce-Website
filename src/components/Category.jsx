import React from "react";
import { connect } from "react-redux";

import CategoryItem from "./CategoryItem";
import { selectCategories } from "../redux/category/category-selectors";

const Category = ({ categories }) => {
	return (
		<div>
			<p className="text-left text-gray-800 text-2xl">Categories</p>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 px-4 py-5">
				{categories.map((category) => (
					<CategoryItem key={category.id} {...category} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	categories: selectCategories(state),
});

export default connect(mapStateToProps)(Category);
