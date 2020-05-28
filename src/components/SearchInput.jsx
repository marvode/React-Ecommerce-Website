import React from "react";

const SearchInput = () => {
	return (
		<form>
			<input
				className="focus:outline-none border-b border-gray-500"
				name="search"
				placeholder="Search"
			/>
		</form>
	);
};

export default SearchInput;
