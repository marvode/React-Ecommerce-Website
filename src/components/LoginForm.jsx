import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Input from "../components/Input";
import LoginButton from "../components/LoginButton";

import { loginStart } from "../redux/user/user-action";

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: null,
			password: null,
			error: false,
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const { username, password } = this.state;

		this.props.login({ username, password });
		this.props.loginErrors
			? this.setState({ error: true })
			: this.setState({ error: false });
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value, error: false });
	};

	render() {
		return (
			<div
				className={`bg-white shadow-md rounded px-8 py-6 ${this.props.classes}`}
			>
				<p className="pb-4 text-xl">Login</p>
				<form onSubmit={this.handleSubmit}>
					{this.state.error ? (
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
						handleChange={this.handleChange}
						label="Email"
						required
					/>
					<Input
						name="password"
						placeholder="Password"
						type="password"
						handleChange={this.handleChange}
						label="Password"
						required
					/>
					<LoginButton
						isLoading={this.props.loggingIn}
						value="Login"
						classes="bg-gray-700 text-white"
						type="submit"
					/>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	loginErrors: state.user.error,
	loggingIn: state.user.loggingIn,
});

const matchDispatchToProps = (dispatch) => ({
	login: (loginInfo) => dispatch(loginStart(loginInfo)),
});

export default withRouter(
	connect(mapStateToProps, matchDispatchToProps)(LoginForm)
);
