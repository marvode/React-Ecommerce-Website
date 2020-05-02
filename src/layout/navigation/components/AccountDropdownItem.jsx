import React from "react";
import "../../../css/tailwind.css";

const AccountDropdownItem = (props) => {
	return (
		<a className={`block ${props.classes}`} href={props.href}>
			{props.body}
		</a>
	);
};

export default AccountDropdownItem;
