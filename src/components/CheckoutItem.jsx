import React from "react";
import { connect } from "react-redux";

import { removeItem } from "../redux/cart/cart-actions";

const CheckoutItem = ({item, removeItem}) => {
	const { name, quantity, price, img } = item
	return (
		<tr className="border-b border-gray-700 p-4">
			<td>
				<div className="">
					<img src={img} alt="cart item" className="w-8" />
				</div>
			</td>
			<td>{name}</td>
			<td>{quantity}</td>
			<td>{price}</td>
			<td>
				<button onClick={()=>removeItem(item)}>&#10005;</button>
			</td>
		</tr>
	);
};

const mapDispatchToProps = (dispatch) => ({
	removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
