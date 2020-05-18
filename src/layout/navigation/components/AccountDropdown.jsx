import React, { Component } from "react";

import AccountDropdownItem from "./AccountDropdownItem";
import Logout from "./Logout";

class AccountDropdown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isAccountOpen: false,
			img: "./img/7.jpg",
		};
	}

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
			<div className={this.props.classes}>
				<div className="relative hidden sm:block" id="sm-above">
					<button
						onClick={this.toggleAccount}
						className="relative block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-100 focus:outline-none focus:border-gray-300"
					>
						<img
							className="h-full w-full object-cover"
							src={this.state.img}
							alt=""
						/>
					</button>
					<button
						onClick={this.closeAccount}
						tabIndex="-1"
						className="z-10 fixed hidden inset-0 h-full w-full bg-black opacity-50 cursor-default"
						id="closeAccount"
					></button>
					<div
						className="absolute z-10 hidden right-0 mt-1 py-2 w-48 bg-white rounded-lg shadow-xl"
						id="account"
					>
						<AccountDropdownItem
							classes="text-gray-800 py-2 px-4 hover:bg-gray-500"
							body="Account Settings"
							to="/account"
						/>
						<AccountDropdownItem
							classes="text-gray-800 py-2 px-4 hover:bg-gray-500"
							body="Profile"
							to="/profile"
						/>
						<Logout classes="text-gray-800 py-2 px-4 hover:bg-gray-500" />
					</div>
				</div>
				{/* for mobile device */}
				<div
					className="sm:hidden text-gray-800 px-2 py-5 border-t border-gray-200"
					id="mobile"
				>
					<div className="flex items-center">
						<img
							className="h-8 w-8 rounded-full object-cover border-2 border-gray-100"
							src={this.state.img}
							alt=""
						/>
						{this.props.user ? (
							<span className="ml-3 font-semibold text-gray-700">
								{this.props.user.name}
							</span>
						) : (
							""
						)}
					</div>
					<div className="mt-4">
						<AccountDropdownItem
							classes="mt-2 hover:text-gray-600"
							body="Account Settings"
							to="/account"
						/>
						<AccountDropdownItem
							classes="mt-2 hover:text-gray-600"
							body="Profile"
							to="/profile"
						/>
						<Logout classes="mt-2 hover:text-gray-600" />
					</div>
				</div>
			</div>
		);
	}
}

export default AccountDropdown;
