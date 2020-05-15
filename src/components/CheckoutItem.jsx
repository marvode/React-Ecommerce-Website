import React from "react";

const CheckoutItem = ({ name, quantity, price, img }) => {
	return (
		<tr>
			<td>
				<div className="flex mb-2">
					<img src={img} alt="cart item" className="w-8" />
					<span className="ml-4">{name}</span>
				</div>
			</td>
			<td></td>
			<td>{quantity}</td>
			<td>{price}</td>
		</tr>
	);
};

export default CheckoutItem;
