import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Label from "../components/Label";

const LoginForm = ({ classes, submit = (f) => f }) => {
	return (
		<div className={`bg-white shadow-md rounded px-8 py-6 ${classes}`}>
			<p className="pb-4 text-xl">Login</p>
			<form onSubmit={submit}>
				<Label value="Name" />
				<Input name="text" placeholder="Name" type="text" />
				<Label value="Email" />
				<Input name="password" placeholder="Password" type="password" />
				<Button
					value="Login"
					classes="bg-gray-700 text-white"
					type="submit"
				/>
			</form>
		</div>
	);
};

export default LoginForm;
