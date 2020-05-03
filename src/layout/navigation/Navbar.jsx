import React from "react";

import AccountDropdown from "./components/AccountDropdown";
import Item from "./components/Item";

const Navbar = ({
	img,
	toggleMenu = (f) => f,
	toggleAccount = (f) => f,
	closeAccount = (f) => f,
}) => {
	return (
		<header className="bg-gray-800 sm:px-10 sm:py-3 sm:flex sm:items-center justify-between">
			<div className="flex px-6 py-3 sm:p-0 justify-between items-center">
				<div className="text-gray-300">
					<svg
						className="fill-current h-8 mr-2 "
						viewBox="0 0 54 54"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
					</svg>
				</div>
				<div className="sm:hidden">
					<button
						onClick={toggleMenu}
						className="block border border-gray-500 p-2 text-gray-500 rounded focus:text-white focus:outline-none focus:shadow-outline hover:text-white hover:border-white"
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
			<div className="hidden sm:flex" id="menu">
				<Item classes="px-2" body="Our Offers" />
				<Item classes="px-2 mt-1" body="Contact Us" />
				<Item classes="px-2 mt-1" body="About Us" />
				<AccountDropdown
					classes="sm:ml-4"
					img={img}
					toggleAccount={toggleAccount}
					closeAccount={closeAccount}
				/>
			</div>
		</header>
	);
};

export default Navbar;
