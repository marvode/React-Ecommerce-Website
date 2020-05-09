import React, { Component } from "react";
import CartButton from "./CartButton";
import CartDropdown from "./CartDropdown";

export default class Cart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isCartOpen: false,
		};
	}

	toggleCart = () => {
        document.getElementById("cartDropdown").classList.toggle("hidden");
		document.getElementById("closeCartDropdown").classList.toggle("hidden");

		this.setState((prevState) => !prevState.isCartOpen);
	};

	render() {
		return (
			<div className={this.props.classes}>
				<div className="relative hidden sm:block" id="sm-above">
					<CartButton id="cartButton" toggleCart={this.toggleCart} />
					<button
						onClick={this.toggleCart}
						tabIndex="-1"
						className="z-10 fixed hidden inset-0 h-full w-full bg-black opacity-50 cursor-default"
						id="closeCartDropdown"
					></button>
					<CartDropdown classes="absolute z-10 hidden right-0 mt-1 py-2  bg-white rounded-lg shadow-xl"/>
				</div>
			</div>
		);
	}
}
