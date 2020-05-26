import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Input from "../components/Input";
import LoginButton from "../components/LoginButton";

import { loginStart } from "../redux/user/user-action";

const LoginForm = (props) => {
	const [userCredentials, setUserCredentials] = useState({
		username: "",
		password: "",
		error: null,
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const { username, password } = userCredentials;
		props.login({ username, password });
		props.loginErrors
			? setUserCredentials({ ...userCredentials, error: true })
			: setUserCredentials({ ...userCredentials, error: false });
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserCredentials({ ...userCredentials, [name]: value, error: false });
	};

	return (
		<div
			className={`bg-white shadow-md rounded px-8 py-6 ${props.classes}`}
		>
			<p className="pb-4 text-xl">Login</p>
			<form onSubmit={handleSubmit}>
				{userCredentials.error ? (
					<p className="mb-2 text-sm italic text-red-600">
						email or password not correct
					</p>
				) : (
					""
				)}
				<Input
					name="username"
					placeholder="Email"
					type="email"
					handleChange={handleChange}
					label="Email"
					required
				/>
				<Input
					name="password"
					placeholder="Password"
					type="password"
					handleChange={handleChange}
					label="Password"
					required
				/>
				<LoginButton
					isLoading={props.loggingIn}
					value="Login"
					classes="bg-gray-700 text-white"
					type="submit"
				/>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => ({
	loginErrors: state.user.loginError,
	loggingIn: state.user.loggingIn,
});

const matchDispatchToProps = (dispatch) => ({
	login: (loginInfo) => dispatch(loginStart(loginInfo)),
});

export default withRouter(
	connect(mapStateToProps, matchDispatchToProps)(LoginForm)
);
