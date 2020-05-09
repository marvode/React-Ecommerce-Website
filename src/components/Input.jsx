import React from "react";

const Input = ({ handleChange, classes, label, ...rest }) => {
	return (
		<div>
			{label ? (
				<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
					{label}
				</label>
			) : null}
			<input
				onChange={handleChange}
				className={`appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${classes}`}
				{...rest}
			/>
		</div>
	);
};

export default Input;
