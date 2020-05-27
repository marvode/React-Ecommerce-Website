import React from "react";

const SearchInput = () => {
	return (
		<form>
			<input
				className=" focus:outline-none border-b"
				name="search"
				placeholder="Search"
			/>
		</form>
	);
};

export default SearchInput;
