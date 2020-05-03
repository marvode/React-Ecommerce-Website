import React from "react";

const AccountDropdownItem = (props) => {
	return (
		<a className={`block ${props.classes}`} href={props.href}>
			{props.body}
		</a>
	);
};

export default AccountDropdownItem;
