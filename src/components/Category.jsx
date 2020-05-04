import React from "react";
import CategoryItem from "./CategoryItem";

const Category = ({data}) => {
	return (
		<div>
			<p className="text-left text-gray-800 text-2xl">Categories</p>
			<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 py-5">
				{data.map((datum) => (
					<CategoryItem key={datum.id} {...datum} />
				))}
			</div>
		</div>
	);
};

export default Category;
