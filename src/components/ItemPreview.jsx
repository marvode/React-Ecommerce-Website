import React from "react";
import { connect } from "react-redux";

import { addItem } from "../redux/cart/cart-actions";
import { withRouter } from "react-router-dom";

const ItemPreview = ({ item, addItem }) => {
	const { img, name, price } = item;
	return (
		<div className="shadow overflow-hidden hover:shadow-lg">
			<div className="bg-white antialiased shadow">
				<div className="relative" style={{ paddingBottom: "100%" }}>
					<img
						className="absolute top-0 h-full w-full object-cover"
						src={img}
						alt=""
					/>
					<button
						className="absolute w-3/4 p-3 bg-gray-100 bg-opacity-25 hover:bg-black"
						onClick={() => addItem(item)}
					>
						<p className="text-center text-gray-900 hover:text-white">
							ADD TO CART
						</p>
					</button>
				</div>
			</div>
			<div className="flex justify-between py-2 px-5">
				<span>{name}</span>
				<span className="pr-3">$ {price}</span>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default withRouter(connect(null, mapDispatchToProps)(ItemPreview));
