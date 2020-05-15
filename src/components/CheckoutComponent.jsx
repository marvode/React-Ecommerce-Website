import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "./CheckoutItem";
import { selectCartItems, selectCartTotal } from "../redux/cart/cart-selectors";

const CheckoutComponent = ({ cartItems, total }) => {
	return (
		<div className="w-4/5">
			<table className="table-fixed">
				<thead>
					<tr>
						<th className="w-1/5 px-4 py-2">Product</th>
						<th className="w-1/5 px-4 py-2">Description</th>
						<th className="w-1/5 px-4 py-2">Quantity</th>
						<th className="w-1/5 px-4 py-2">Price</th>
						<th className="w-1/5 px-4 py-2">Remove</th>
					</tr>
				</thead>
				<tbody>
                    {
                        cartItems.map((cartItem) => {
                            console.log(cartItem)
						    return <CheckoutItem key={cartItem.id} {...cartItem}/>}
					)}

                    <tr>
                        <td className="w-1/5 px-4 py-2">Total </td>
                        <td className="w-1/5 px-4 py-2"></td>
                        <td className="w-1/5 px-4 py-2"></td>
                        <td className="w-1/5 px-4 py-2"></td>
                        <td className="w-1/5 px-4 py-2">{total}</td>
                    </tr>
				</tbody>
			</table>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutComponent);
