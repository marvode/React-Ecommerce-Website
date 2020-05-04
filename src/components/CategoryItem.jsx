import React from "react";

const CategoryItem = ({ img, name }) => {
	return (
		<div className="bg-white overflow-hidden antialiased shadow">
			<div className="relative" style={{ paddingBottom: "100%" }}>
				<img
					className="absolute top-0 h-full w-full object-cover"
					src={img}
					alt=""
				/>
				<div className="absolute w-3/4 p-3 bg-gray-100 bg-opacity-25">
					<p className="text-center text-gray-900">{name}</p>
				</div>
			</div>
		</div>
	);
};

export default CategoryItem;
