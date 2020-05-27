import React from "react";
import { Route, Redirect } from "react-router-dom";

import Product from "../components/Product";

const ProductPage = ({ match }) => {
	return (
		<div>
			<Route exact path={match.path} render={() => <Redirect to="/" />} />
			<Route
				exact
				path={`${match.path}/:productName`}
				component={Product}
			/>
		</div>
	);
};

export default ProductPage;
