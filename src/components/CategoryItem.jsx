import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { selectCollection } from "../redux/shop/shop-selectors";

const CategoryItem = ({ img, name, collection, history }) => {
	return (
		<div
			className="bg-white overflow-hidden antialiased shadow cursor-pointer"
			onClick={() =>
				history.push(`/shop/${collection.name.replace(" ", "_")}`)
			}
		>
			<div className="relative" style={{ paddingBottom: "100%" }}>
				<img
					className="absolute top-0 h-full w-full object-cover"
					src={img}
					alt=""
				/>
				<div className="absolute w-3/4 p-3 bg-gray-100 bg-opacity-25">
					<p className="text-center text-gray-900">{name}</p>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.name)(state),
});

export default withRouter(connect(mapStateToProps)(CategoryItem));
