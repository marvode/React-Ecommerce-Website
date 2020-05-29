import React from "react";
import { withRouter } from "react-router-dom";

import ItemPreview from "./ItemPreview";

const CollectionOverview = ({ collection, match }) => {
	return (
		<div>
			<div className="mb-4">
				<h2 className="text-left text-gray-800 text-2xl capitalize">
					{match.params.categoryId}
				</h2>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 px-4 py-5">
					{collection.map((item) => (
						<ItemPreview key={item.id} item={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default withRouter(CollectionOverview);
