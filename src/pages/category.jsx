import React from "react";
import { Route } from "react-router-dom";

import Collection from "../components/Collection";
import Category from "../components/Category";

const CategoryPage = ({ match }) => {
	return (
		<div>
			<Route exact path={`${match.path}`} component={Category} />
			<Route
				exact
				path={`${match.path}/:categoryId`}
				component={Collection}
			/>
		</div>
	);
};

export default CategoryPage;
