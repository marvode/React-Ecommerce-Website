import React from "react";
import { connect } from "react-redux";

import {
	selectCollection,
	selectCollections,
} from "../redux/shop/shop-selectors";
import ItemPreview from "../components/ItemPreview";

const Collection = ({ collection, collections }) => {
	return (
		<div className="mb-4">
			<h2 className="text-left text-gray-800 text-2xl">
				{collection.name}
			</h2>
			<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 py-5">
				{collections.map((item) => (
					<ItemPreview key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
	collections: selectCollections(state),
});

export default connect(mapStateToProps)(Collection);
