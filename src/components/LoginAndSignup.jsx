import React from "react";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const LoginAndSignup = () => {
	return (
		<div>
			<div className="flex justify-center py-16">
				<div className="sm:grid sm:grid-cols-2 gap-32 ">
					<LoginForm classes="mb-16 sm:my-16" />
					<SignupForm />
				</div>
			</div>
		</div>
	);
};

export default LoginAndSignup;
