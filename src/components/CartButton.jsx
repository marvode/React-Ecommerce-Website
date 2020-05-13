import React from "react";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../redux/cart/cart-selectors";

const CartButton = ({ id, toggleCart, itemCount }) => {
	return (
		<button
			className="block px-2 py-1 text-gray-700 font-semibold hover:bg-gray-200 rounded sm:mt-0 sm:ml-2 focus:outline-none"
			onClick={toggleCart}
			id={id}
		>
			Cart
			<span className="ml-1 text-xs bg-gray-600 text-gray-200 rounded p-1">
				{itemCount}
			</span>
		</button>
	);
};

const mapStateToProps = (state) => ({
	itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps)(CartButton);
