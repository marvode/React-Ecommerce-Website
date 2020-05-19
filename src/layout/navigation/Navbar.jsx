import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import AccountDropdown from "./components/AccountDropdown";
import Item from "./components/Item";
import Cart from "../../components/Cart";

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isMenuOpen: false,
		};
	}

	toggleMenu = () => {
		document.getElementById("menu").classList.toggle("hidden");
		this.setState((prevState) => !prevState.isMenuOpen);
	};

	render() {
		return (
			<nav className="sm:px-10 sm:py-3 sm:flex sm:items-center justify-between shadow">
				<div className="flex px-6 py-3 sm:p-0 justify-between items-center">
					<div className="text-gray-700">
						<Link to="/">
							<svg
								className="fill-current h-8 mr-2 "
								viewBox="0 0 54 54"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
							</svg>
						</Link>
					</div>
					<div className="sm:hidden">
						<button
							onClick={this.toggleMenu}
							className="block border border-gray-700 p-2 text-gray-700 rounded focus:text-gray-900 focus:outline-none focus:shadow-outline hover:text-gray-900 hover:border-black"
						>
							<svg
								className="fill-current h-5 w-5"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Menu</title>
								<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
							</svg>
						</button>
					</div>
				</div>
				<div
					className="hidden sm:flex px-5 pb-2 sm:pb-0"
					id="menu"
					onClick={this.toggleMenu}
				>
					<Item classes="px-2 mt-1" body="Contact Us" to="/contact" />
					<Cart />
					{!this.props.currentUser ? (
						<Item
							classes="px-2 mt-1 sm:mr-2"
							body="Login"
							to="/login"
						/>
					) : (
						<AccountDropdown
							classes="sm:ml-4"
							user={this.props.currentUser.user}
						/>
					)}
				</div>
			</nav>
		);
	}
}

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Navbar);
