import React from "react";
import { connect } from "react-redux";

import { addItem } from "../redux/cart/cart-actions";

const Product = ({ product }) => {
	return (
		<div className="mx-10">
			<div className="sm:flex justify-center w-full space-x-6">
				<div className="antialiased sm:w-2/5">
					<div className="relative" style={{ paddingBottom: "100%" }}>
						<img
							className="absolute top-0 h-full w-full object-cover"
							src={product.img}
							alt="product"
						/>
					</div>
				</div>
				<div className="sm:w-2/5 py-4 text-gray-800">
					<p className="uppercase mb-2 text-lg"> {product.name} </p>
					<p> Price: $ {product.price} </p>
					<p className="mt-8 mb-2 font-bold">
						Some information about the product{" "}
					</p>
					<p className="mb-5"> {product.details} </p>
					<button
						className="w-1/2 p-3 bg-gray-700 bg-opacity-25 hover:bg-black hover:text-white"
						onClick={() => addItem(product)}
					>
						ADD TO CART
					</button>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	product: state.collection.collection.filter(
		(collection) => collection.name === ownProps.match.params.productName
	)[0],
});

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
