import React from "react";
import Loader from "react-loader-spinner";

const WithSpinner = (WrappedComponent) => {
	const Spinner = ({ isLoading, ...otherProps }) => {
		return isLoading ? (
			<div className="h-full w-full flex justify-center my-32">
				<Loader type="TailSpin" color="#676767" />
			</div>
		) : (
			<WrappedComponent {...otherProps} />
		);
	};
	return Spinner;
};

export default WithSpinner;
