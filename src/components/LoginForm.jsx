import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import User from "../utils/User";
import Input from "../components/Input";
import Button from "../components/Button";
import { setCurrentUser, setUserToken } from "../redux/user/user-action";

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: null,
			password: null,
			response: {},
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const { username, password } = this.state;
		User.login({ username, password }).then((res) => {
			this.setState({ response: res });
			User.responseAfterLogin(res);
			this.props.setUserToken({
				access_token: res.access_token,
				refresh_token: res.refresh_token,
			});
			// User.loggedInUser().then(
			// 	res => {
			// 		this.props.setCurrentUser({ ...res });
			// 	}
			// )
			// console.log(res)
			// this.props.history.push("/");

			//temp solution
			window.location = "/";
		});
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
				<p className="pb-4 text-xl">Login</p>
				<form onSubmit={this.handleSubmit}>
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
					<Button
						value="Login"
						classes="bg-gray-700 text-white"
						type="submit"
					/>
				</form>
			</div>
		);
	}
}

const matchDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
	setUserToken: (token) => dispatch(setUserToken(token)),
});

export default connect(null, matchDispatchToProps)(withRouter(LoginForm));