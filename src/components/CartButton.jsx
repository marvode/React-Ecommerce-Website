import React from "react";

const CartButton = ({ id, toggleCart }) => {
	return (
		<button
			className="block px-2 py-1 text-gray-700 font-semibold hover:bg-gray-200 rounded sm:mt-0 sm:ml-2 focus:outline-none"
			onClick={toggleCart}
			id={id}
		>
			Cart
		</button>
	);
};

export default CartButton;
