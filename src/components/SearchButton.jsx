import React from "react";

const SearchButton = ({ classes, click }) => {
	return (
		<button className={`focus:outline-none  ${classes}`} onClick={click}>
			<span>Search</span>
		</button>
	);
};

export default SearchButton;
