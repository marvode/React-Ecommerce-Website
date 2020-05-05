import React from "react";
import ItemPreview from "./ItemPreview";

const CollectionPreview = ({ title, items }) => {
	return (
		<div>
			<h2 className="text-left text-gray-800 text-2xl">{title}</h2>
			<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 py-5">
				{items.map((item) => (
					<ItemPreview key={item.id} {...item} />
				))}
			</div>
		</div>
	);
};

export default CollectionPreview; 
