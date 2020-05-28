import React from "react";

const SearchButton = ({ classes }) => {
	const toggleSearch = () => {
		document.getElementById("search").classList.toggle("hidden");
	};
	return (
		<button
			className={`focus:outline-none  ${classes}`}
			onClick={toggleSearch}
		>
			<span>Search</span>
		</button>
	);
};

export default SearchButton;
