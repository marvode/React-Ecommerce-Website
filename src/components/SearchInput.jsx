import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchInput = () => {
	const [search, setSearch] = useState("");
	useEffect(() => {
		axios.get(`/search?query=${search}`);
		return () => {
			setSearch("");
		};
	}, [search]);

	const handleChange = (e) => {
		if (e.target.value) setSearch(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form>
			<input
				className="focus:outline-none border-b border-gray-500"
				name="search"
				placeholder="Search"
				onChange={handleChange}
				required
			/>
			<button type="submit" onSubmit={handleSubmit}>
				Search
			</button>
		</form>
	);
};

export default SearchInput;
