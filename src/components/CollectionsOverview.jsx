import React from "react";
import { connect } from "react-redux";

import CollectionPreview from "./CollectionPreview";
import { selectCollections } from "../redux/shop/shop-selectors";

const CollectionsOverview = ({ collections }) => {
	console.log(collections);
	return (
		<div>
			{collections.map((collection) => (
				<CollectionPreview
					key={collection.id}
					title={collection.name}
				/>
			))}
		</div>
	);
};

const mapStateToProps = (state) => ({
	collections: selectCollections(state),
});

export default connect(mapStateToProps)(CollectionsOverview);
