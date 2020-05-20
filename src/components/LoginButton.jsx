import React from "react";

import FormSpinner from "./FormSpinnerHOC";

const LoginButton = ({ value, classes, type }) => {
	return (
		<button
			className={`font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${classes}`}
			type={type}
		>
			{value}
		</button>
	);
};

export default FormSpinner(LoginButton);
