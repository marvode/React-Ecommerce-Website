import React, { useState } from "react";

import CartButton from "./CartButton";
import CartDropdown from "./CartDropdown";

const Cart = ({ classes }) => {
	const [cartHidden, setCartHidden] = useState("hidden");

	const toggleCartHidden = () => {
		document.getElementById("cartDropdown").classList.toggle("hidden");
		document.getElementById("closeCartDropdown").classList.toggle("hidden");
		setCartHidden(!cartHidden);
	};
	return (
		<div className={`sm:block ${classes}`}>
			<div className="relative" id="sm-above">
				<CartButton id="cartButton" hidden={toggleCartHidden} />
				<button
					onClick={toggleCartHidden}
					tabIndex="-1"
					className="z-10 fixed hidden inset-0 h-full w-full bg-black opacity-50 cursor-default"
					id="closeCartDropdown"
				></button>
				<CartDropdown toggleCart={toggleCartHidden} />
			</div>
		</div>
	);
};

export default Cart;
