import React, { Component } from "react";
import AccountDropdownItem from "./AccountDropdownItem";

import "../../../css/tailwind.css";

class AccountDropdown extends Component {
	constructor(props) {
		super();
		this.state = {
			isAccountOpen: false,
			img: './img/7.jpg'
		};
		this.props = props;
	}

	toggleAccount = () => {
		document.getElementById("account").classList.toggle("hidden");
		document.getElementById("closeAccount").classList.toggle("hidden");

		this.setState(prevState => !prevState.isAccountOpen);
	};

	closeAccount = () => {
		document.getElementById('account').classList.add('hidden');
		document.getElementById('closeAccount').classList.add('hidden');
		this.setState(prevState => !prevState.isAccountOpen);
	}

	render() {
		return (
			<div className={`${this.props.classes}`}>
				<div className="relative hidden sm:block" id="sm-above">
					<button
						onClick={this.toggleAccount}
						className="relative block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-gray-300"
					>
						<img
							className="h-full w-full object-cover"
							src={this.state.img}
							alt="Hello"
						/>
					</button>
					<button
						onClick={this.closeAccount}
						tabindex="-1"
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
						/>
						<AccountDropdownItem
							classes="text-gray-800 py-2 px-4 hover:bg-gray-500"
							body="Support"
						/>
						<AccountDropdownItem
							classes="text-gray-800 py-2 px-4 hover:bg-gray-500"
							body="Sign Out"
						/>
					</div>
				</div>

				<div
					className="sm:hidden text-gray-300 px-2 py-5 border-t border-gray-700"
					id="mobile"
				>
					<div className="flex items-center">
						<img
							className="h-8 w-8 rounded-full object-cover border-2 border-gray-600"
							src={this.state.img}
							alt="hello"
						/>
						<span className="ml-3 font-semibold text-white">
							Jane Doe
						</span>
					</div>
					<div className="mt-4">
						<AccountDropdownItem
							classes="mt-2 hover:text-white"
							body="Account Settings"
						/>
						<AccountDropdownItem
							classes="mt-2 hover:text-white"
							body="Support"
						/>
						<AccountDropdownItem
							classes="mt-2 hover:text-white"
							body="Sign Out"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default AccountDropdown;
