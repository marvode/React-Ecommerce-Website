import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CartItem from "./CartItem";

const CartDropdown = ({ history, cartItems }) => {
	return (
		<div
			id="cartDropdown"
			className="absolute hidden right-0 mt-1 py-2  bg-white rounded-lg shadow-xl"
			style={{ width: "18rem", height: "20rem" }}
		>
			<div className="mt-4">
				<div className="w-11/12 mx-auto overflow-hidden">
					{cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} item={cartItem} />
					))}
				</div>
				<div className="absolute bottom-0 w-full flex justify-center mb-4">
					<button
						className="bg-gray-900 text-gray-200 w-11/12 text-center py-2 rounded"
						onClick={() => history.push("/checkout")}
					>
						CHECKOUT
					</button>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
	cartItems,
});

export default connect(mapStateToProps)(withRouter(CartDropdown));
