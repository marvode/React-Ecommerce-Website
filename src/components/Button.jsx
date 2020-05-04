import React from "react";

const Button = ({value, classes, type }) => {
	return (
		<button
			className={`font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${classes}`}
			type={type}
		>
			{value}
		</button>
	);
};

export default Button;
