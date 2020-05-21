import React from "react";
import { Route, Redirect } from "react-router-dom";

import Collection from "../components/Collection";

const CategoryPage = ({ match }) => {
	return (
		<div>
			<Route
				exact
				path={`${match.path}`}
				render={() => <Redirect to="/" />}
			/>
			<Route
				exact
				path={`${match.path}/:categoryId`}
				component={Collection}
			/>
		</div>
	);
};

export default CategoryPage;
