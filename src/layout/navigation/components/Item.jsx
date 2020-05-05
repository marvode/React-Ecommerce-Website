import React from "react";
import { Link } from "react-router-dom";

const Item = ({ classes, body, to }) => {
	return (
		<Link
			className={`block px-2 py-1 text-gray-700 font-semibold hover:bg-gray-200 rounded sm:mt-0 sm:ml-2 ${classes}`}
			to={to}
		>
			{body}
		</Link>
	);
};

export default Item;
