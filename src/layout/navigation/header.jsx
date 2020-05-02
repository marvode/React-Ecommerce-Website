import React, { Component } from "react";

import AccountDropdown from "./components/AccountDropdown";
import Item from "./components/Item";

import "../../css/tailwind.css";

class PageHeader extends Component {
	constructor() {
		super();
		this.state = {
			isMenuOpen: false,
			isAccountOpen: false,
		};
	}

	toggleMenu = () => {
		document.getElementById("menu").classList.toggle("hidden");
		this.setState((prevState) => !prevState.isMenuOpen);
	};

	// toggleAccount = () => {
	// 	document.getElementById("account").classList.toggle("hidden");
	// 	document.getElementById("closeAccount").classList.toggle("hidden");

	// 	this.setState(prevState => !prevState.isAccountOpen);
	// };

	// closeAccount = () => {
	// 	document.getElementById('account').classList.add('hidden');
	// 	document.getElementById('closeAccount').classList.add('hidden');
	// 	this.setState(prevState => !prevState.isAccountOpen);
	// }

	render() {
		return (
			<header className="bg-gray-800 sm:px-10 sm:py-3 sm:flex sm:items-center justify-between">
				<div className="flex px-6 py-3 sm:p-0 justify-between items-center">
					<div className="text-gray-300">
						<svg
							className="fill-current h-10 mr-2 "
							viewBox="0 0 54 54"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
						</svg>
					</div>
					<div className="sm:hidden">
						<button onClick={this.toggleMenu} className="block border border-gray-500 p-2 text-gray-500 rounded focus:text-white focus:outline-none focus:shadow-outline hover:text-white hover:border-white">
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
				<div className="hidden pt-2 pb-4 sm:flex" id="menu">
					<Item classes="px-2" body="Our Offers" />
					<Item classes="px-2 mt-1" body="Contact Us" />
					<Item classes="px-2 mt-1" body="About Us" />
					<AccountDropdown classes="sm:ml-4" />
				</div>
			</header>
		);
	}
}

export default PageHeader;
