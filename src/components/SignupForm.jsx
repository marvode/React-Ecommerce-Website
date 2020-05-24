import React, { Component } from "react";
import { connect } from "react-redux";

import Input from "../components/Input";
import LoginButton from "../components/LoginButton";
import { signUpStart } from "../redux/user/user-action";

class SignupForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: null,
			email: null,
			password: null,
			password_confirmation: null,
			error: null,
		};
	}

	handleSignupForm = (e) => {
		e.preventDefault();
		const { name, email, password, password_confirmation } = this.state;
		this.props.signup({
			name,
			email,
			password,
			password_confirmation,
		});
		this.props.signUpErrors
			? this.setState({ error: this.props.signUpErrors })
			: this.setState({ error: null });
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div
				className={`bg-white shadow-md rounded px-8 py-6 ${this.props.classes}`}
			>
				<p className="pb-4 text-xl">Create A New Account</p>
				<form onSubmit={this.handleSignupForm}>
					<Input
						name="name"
						placeholder="Name"
						type="text"
						handleChange={this.handleChange}
						label="Name"
						required
					/>
					{this.state.error && this.state.error.email ? (
						<div>
							{this.state.error.email.map((error) => (
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
						handleChange={this.handleChange}
						label="Email"
						required
					/>
					{this.state.error && this.state.error.password ? (
						<div>
							{this.state.error.password.map((error) => (
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
						handleChange={this.handleChange}
						label="Password"
						required
					/>
					<Input
						name="password_confirmation"
						placeholder="Confirm Password"
						type="password"
						handleChange={this.handleChange}
						label="Confirm Password"
						required
					/>
					<LoginButton
						isLoading={this.props.signingUp}
						value="Sign Up"
						classes="bg-gray-700 text-white"
						type="submit"
					/>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	isSigningUp: state.user.signingUp,
	signUpErrors: state.user.signUpError,
});

const mapDispatchToProps = (dispatch) => ({
	signup: (userInfo) => dispatch(signUpStart(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
