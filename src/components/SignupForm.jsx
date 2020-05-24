import React, { useState } from "react";
import { connect } from "react-redux";

import Input from "../components/Input";
import LoginButton from "../components/LoginButton";
import { signUpStart } from "../redux/user/user-action";

const SignupForm = (props) => {
	const [userInfo, setUserInfo] = useState({
		name: "",
		email: "",
		password: "",
		password_confirmation: "",
		error: null,
	});

	const handleSignupForm = (e) => {
		e.preventDefault();
		const { name, email, password, password_confirmation } = userInfo;
		props.signup({
			name,
			email,
			password,
			password_confirmation,
		});
		props.signUpErrors
			? setUserInfo({ ...userInfo, error: props.signUpErrors })
			: setUserInfo({ ...userInfo, error: null });
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserInfo({ ...userInfo, [name]: value });
	};

	return (
		<div
			className={`bg-white shadow-md rounded px-8 py-6 ${props.classes}`}
		>
			<p className="pb-4 text-xl">Create A New Account</p>
			<form onSubmit={handleSignupForm}>
				<Input
					name="name"
					placeholder="Name"
					type="text"
					handleChange={handleChange}
					label="Name"
					required
				/>
				{userInfo.error && userInfo.error.email ? (
					<div>
						{userInfo.error.email.map((error) => (
							<p className="mb-2 text-sm italic text-red-600">
								{error}
							</p>
						))}
					</div>
				) : (
					""
				)}
				<Input
					name="email"
					placeholder="Email"
					type="email"
					handleChange={handleChange}
					label="Email"
					required
				/>
				{userInfo.error && userInfo.error.password ? (
					<div>
						{userInfo.error.password.map((error) => (
							<p className="mb-2 text-sm italic text-red-600">
								{error}
							</p>
						))}
					</div>
				) : (
					""
				)}
				<Input
					name="password"
					placeholder="Password"
					type="password"
					handleChange={handleChange}
					label="Password"
					required
				/>
				<Input
					name="password_confirmation"
					placeholder="Confirm Password"
					type="password"
					handleChange={handleChange}
					label="Confirm Password"
					required
				/>
				<LoginButton
					isLoading={props.signingUp}
					value="Sign Up"
					classes="bg-gray-700 text-white"
					type="submit"
				/>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isSigningUp: state.user.signingUp,
	signUpErrors: state.user.signUpError,
});

const mapDispatchToProps = (dispatch) => ({
	signup: (userInfo) => dispatch(signUpStart(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
