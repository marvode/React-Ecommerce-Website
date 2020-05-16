import React from "react";
import { connect } from "react-redux";

import { logoutUser } from "../../../redux/user/user-action";

const Logout = ({ classes, logoutUser }) => {
	return (
		<button
			className={`block w-full text-left focus:outline-none focus:border-0 ${classes}`}
			onClick={() => logoutUser()}
		>
			Logout
		</button>
	);
};

const mapDispatchToProps = (dispatch) => ({
	logoutUser: () => dispatch(logoutUser()),
});

export default connect(null, mapDispatchToProps)(Logout);
