import React from "react";
import { withRouter } from "react-router-dom";

const CartDropdown = ({ classes, state, history }) => {
	return (
		<div
			id="cartDropdown"
			className={`${classes}`}
			style={{ width: "18rem", height: "20rem" }}
		>
			<button
				className="bg-gray-900 text-gray-200 w-11/12 text-center py-2 rounded"
				onClick={() => history.push("/checkout")}
			>
				CHECKOUT
			</button>
		</div>
	);
};

export default withRouter(CartDropdown);
