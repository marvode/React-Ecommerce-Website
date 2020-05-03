import React, { Component } from "react";

import Navbar from "./Navbar";

class PageHeader extends Component {
	constructor() {
		super();
		this.state = {
			isMenuOpen: false,
			isAccountOpen: false,
			img: "./img/7.jpg",
		};
	}

	toggleMenu = () => {
		document.getElementById("menu").classList.toggle("hidden");
		this.setState((prevState) => !prevState.isMenuOpen);
	};

	toggleAccount = () => {
		document.getElementById("account").classList.toggle("hidden");
		document.getElementById("closeAccount").classList.toggle("hidden");
		this.setState((prevState) => !prevState.isAccountOpen);
	};

	closeAccount = () => {
		document.getElementById("account").classList.add("hidden");
		document.getElementById("closeAccount").classList.add("hidden");
		this.setState((prevState) => !prevState.isAccountOpen);
	};

	render() {
		return (
			<Navbar
				img={this.state.img}
				toggleMenu={this.toggleMenu}
				toggleAccount={this.toggleAccount}
				closeAccount={this.closeAccount}
			/>
		);
	}
}

export default PageHeader;
