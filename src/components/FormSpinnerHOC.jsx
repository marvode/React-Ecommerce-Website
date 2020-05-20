import React from "react";
import Loader from "react-loader-spinner";

const FormSpinner = (WrappedComponent) => {
	const Spinner = ({ isLoading, ...otherProps }) => {
		return isLoading ? (
			<div className="py-2 px-4">
				<Loader
					type="TailSpin"
					color="#676767"
					height="2rem"
					width="2rem"
				/>
			</div>
		) : (
			<WrappedComponent {...otherProps} />
		);
	};
	return Spinner;
};

export default FormSpinner;
