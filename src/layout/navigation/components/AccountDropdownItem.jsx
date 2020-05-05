import React from "react";
import { withRouter } from "react-router";

const AccountDropdownItem = ({ classes, body, to, history }) => {
	return (
		<button
			className={`block w-full text-left focus:outline-none focus:border-0 ${classes}`}
			onClick={() => history.push(to)}
		>
			{body}
		</button>
	);
};

export default withRouter(AccountDropdownItem);
