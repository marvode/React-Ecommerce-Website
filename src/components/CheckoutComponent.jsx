import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "./CheckoutItem";
import { selectCartItems, selectCartTotal } from "../redux/cart/cart-selectors";
import StripeButton from "../components/StripeButton";

const CheckoutComponent = ({ cartItems, total }) => {
	return (
		<div className="w-4/5">
			<table className="table-fixed">
				<thead>
					<tr className="border-b border-gray-700 p-5">
						<th className="w-1/5 px-4 py-2">Product</th>
						<th className="w-1/5 px-4 py-2">Description</th>
						<th className="w-1/5 px-4 py-2">Quantity</th>
						<th className="w-1/5 px-4 py-2">Price</th>
						<th className="w-1/5 px-4 py-2">Remove</th>
					</tr>
				</thead>
				<tbody>
					{cartItems.map((cartItem) => (
						<CheckoutItem key={cartItem.id} item={cartItem} />
					))}

					<tr>
						<td className="w-1/5 px-4 py-2">Total </td>
						<td className="w-1/5 px-4 py-2"></td>
						<td className="w-1/5 px-4 py-2"></td>
						<td className="w-1/5 px-4 py-2">{total}</td>
						<td className="w-1/5 px-4 py-2"></td>
					</tr>
				</tbody>
			</table>
			<div className="text-center my-10 text-lg text-red-700">
				Use the following test credit card for payments
				<br />
				4242 4242 4242 4242 - Exp Date: 05/21 - CVV: 448
			</div>
			<div className="flex justify-center  my-8">
				<StripeButton price={total} />
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutComponent);
