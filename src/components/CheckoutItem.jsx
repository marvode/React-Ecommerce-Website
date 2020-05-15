import React from "react";
import { connect } from "react-redux";

import { clearItem, addItem, removeItem } from "../redux/cart/cart-actions";

const CheckoutItem = ({ item, clearItem, addItem, removeItem }) => {
	const { name, quantity, price, img } = item;
	return (
		<tr className="border-b border-gray-700 p-4">
			<td>
				<div className="">
					<img src={img} alt="cart item" className="w-8" />
				</div>
			</td>
			<td>{name}</td>
			<td className="space-x-2">
				<button
					className="focus:outline-none"
					onClick={() => removeItem(item)}
				>
					&#10094;
				</button>
				<span>{quantity}</span>
				<button
					className="focus:outline-none"
					onClick={() => addItem(item)}
				>
					&#10095;
				</button>
			</td>
			<td>{price}</td>
			<td>
				<button onClick={() => clearItem(item)}>&#10005;</button>
			</td>
		</tr>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(clearItem(item)),
	addItem: (item) => dispatch(addItem(item)),
	removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
