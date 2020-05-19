import React from "react";
import { connect } from "react-redux";

import { selectCollections } from "../redux/shop/shop-selectors";
import Collection from "./Collection";

const CollectionsOverview = ({ collections }) => {
	console.log(collections);
	return (
		<div>
			{collections.map((collection) => (
				<Collection key={collection.id} title={collection.name} />
			))}
		</div>
	);
};

const mapStateToProps = (state) => ({
	collections: selectCollections(state),
});

export default connect(mapStateToProps)(CollectionsOverview);
