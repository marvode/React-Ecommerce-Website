import React from "react";
import { connect } from "react-redux";

import ItemPreview from "./ItemPreview";
import { selectCategorySections } from "../redux/category/category-selectors";

const CollectionPreview = ({ title, items }) => {
	return (
		<div className="mb-4">
			<h2 className="text-left text-gray-800 text-2xl">{title}</h2>
			<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 py-5">
				{items
					.filter((item, idx) => idx < 4)
					.map((item) => (
						<ItemPreview key={item.id} item={item} />
					))}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	items: selectCategorySections(state),
});

export default connect(mapStateToProps)(CollectionPreview);
