import React from "react";
import { connect } from "react-redux";

import { toggleCart } from "../redux/cart/cart-actions";
import CartButton from "./CartButton";
import CartDropdown from "./CartDropdown";

const Cart = ({ classes, toggleCart }) => {
	const toggleCartHidden = () => {
		document.getElementById("cartDropdown").classList.toggle("hidden");
		document.getElementById("closeCartDropdown").classList.toggle("hidden");
		toggleCart();
	};
	return (
		<div className={classes}>
			<div className="relative hidden sm:block" id="sm-above">
				<CartButton id="cartButton" hidden={toggleCartHidden}/>
				<button
					onClick={toggleCartHidden}
					tabIndex="-1"
					className="z-10 fixed hidden inset-0 h-full w-full bg-black opacity-50 cursor-default"
					id="closeCartDropdown"
				></button>
				<CartDropdown toggleCart={toggleCartHidden}/>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	toggleCart: () => dispatch(toggleCart()),
});

export default connect(null, mapDispatchToProps)(Cart);
