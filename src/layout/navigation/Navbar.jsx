import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import AccountDropdown from "./components/AccountDropdown";
import Item from "./components/Item";
import CartButton from "../../components/CartButton";
import SearchInput from "../../components/SearchInput";
import SearchButton from "../../components/SearchButton";
import { selectCurrentUser } from "../../redux/user/user-selectors";

const Navbar = (props) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [showSearch, setShowSearch] = useState(false);

	const toggleMenu = () => {
		document.getElementById("menu").classList.toggle("hidden");
		setMenuOpen(!menuOpen);
	};

	const toggleSearch = () => {
		setShowSearch(!showSearch);
	};

	return (
		<nav className="sm:px-10 sm:py-3 sm:flex sm:items-center justify-between shadow navbar">
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
				<div className="flex sm:hidden">
					<SearchButton click={toggleSearch} />
					<CartButton classes="mr-4" />
					<button
						onClick={toggleMenu}
						className="block p-2 text-gray-500 rounded-full focus:bg-gray-300 focus:text-gray-700 focus:outline-none hover:bg-gray-300 hover:text-gray-700 hover:border-black"
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
			{showSearch ? (
				<div className="flex justify-center py-3 sm:py-0" id="search">
					<SearchInput />
				</div>
			) : (
				""
			)}
			<div
				className="hidden sm:flex px-5 pb-2 sm:pb-0"
				id="menu"
				onClick={toggleMenu}
			>
				<SearchButton classes="hidden sm:block" click={toggleSearch} />
				<Item classes="px-2 mt-1" body="Contact Us" to="/contact" />
				<CartButton classes="hidden sm:block" />
				{!props.currentUser ? (
					<Item
						classes="px-2 mt-1 sm:mr-2"
						body="Login"
						to="/login"
					/>
				) : (
					<AccountDropdown
						classes="sm:ml-4"
						user={props.currentUser}
					/>
				)}
			</div>
		</nav>
	);
};

const mapStateToProps = (state) => ({
	currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps)(Navbar);
