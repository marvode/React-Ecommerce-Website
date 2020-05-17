import React from "react";

import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

const Login = () => {
	return (
		<div className="flex justify-center py-16">
			<div className="sm:grid sm:grid-cols-2 gap-32 ">
				<LoginForm classes="mb-16 sm:my-16" />
				<SignupForm />
			</div>
		</div>
	);
};

export default Login;
