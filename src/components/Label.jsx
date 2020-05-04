import React from "react";

const Label = ({ value }) => {
	return (
		<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
			{value}
		</label>
	);
};

export default Label;
