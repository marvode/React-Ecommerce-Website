import React from "react";
import User from "../../../utils/User";

const Logout = ({ classes }) => {
	return (
		<button
			className={`block w-full text-left focus:outline-none focus:border-0 ${classes}`}
			onClick={User.logout}
		>
			Logout
		</button>
	);
};

export default Logout;
