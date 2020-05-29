import React from "react";
import { connect } from "react-redux";

import { addItem } from "../redux/cart/cart-actions";
import { withRouter } from "react-router-dom";

const ItemPreview = ({ item, addItem, history }) => {
	const { img, name, price } = item;
	return (
		<div className="shadow overflow-hidden hover:shadow-lg rounded-lg">
			<div className="bg-white antialiased shadow">
				<div className="relative" style={{ paddingBottom: "100%" }}>
					<img
						className="absolute top-0 h-full w-full object-cover"
						src={img}
						alt=""
					/>
					<div className="absolute bottom-0 mb-16 flex justify-center w-full space-x-4 img-embedded">
						<button
							className="w-2/5 p-3 bg-gray-100 bg-opacity-50 hover:bg-black hover:text-white"
							onClick={() => addItem(item)}
						>
							ADD TO CART
						</button>
						<button
							className="w-2/5 p-3 bg-gray-100 bg-opacity-50 hover:bg-black hover:text-white"
							onClick={() => history.push(`/product/${name}`)}
						>
							VIEW ITEM
						</button>
					</div>
				</div>
			</div>
			<div className="flex justify-between py-4 px-5 tracking-wider">
				<span className="uppercase font-semibold">{name}</span>
				<span className="pr-3">$ {price}</span>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default withRouter(connect(null, mapDispatchToProps)(ItemPreview));
