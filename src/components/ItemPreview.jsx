import React from "react";

const ItemPreview = ({ img, name, price }) => {
	return (
		<div className="shadow overflow-hidden hover:shadow-lg">
			<div className="bg-white antialiased shadow">
				<div className="relative hover:bg-opacity-25" style={{ paddingBottom: "100%" }}>
					<img
						className="absolute top-0 h-full w-full object-cover"
						src={img}
						alt=""
					/>
					<div className="absolute w-3/4 p-3 bg-gray-100 bg-opacity-25">
						<p className="text-center text-gray-900">ADD TO CART</p>
					</div>
				</div>
			</div>
			<div className="flex justify-between py-2 px-5">
				<span>{name}</span>
				<span className="pr-3">$ {price}</span>
			</div>
		</div>
	);
};

export default ItemPreview;
