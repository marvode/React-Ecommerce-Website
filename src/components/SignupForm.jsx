import React, { Component } from "react";

import Input from "../components/Input";
import LoginButton from "../components/LoginButton";
import User from "../utils/User";

class SignupForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: null,
			email: null,
			password: null,
			password_confirmation: null,
			response: {},
		};
	}

	handleSignupForm = (e) => {
		e.preventDefault();
		const { name, email, password, password_confirmation } = this.state;
		User.signup({ name, email, password, password_confirmation }).then(
			(res) => {
				this.setState({ response: res });
				console.log(this.state);
			}
		);
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
					<Input
						name="email"
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
					<Input
						name="password_confirmation"
						placeholder="Confirm Password"
						type="password"
						handleChange={this.handleChange}
						label="Confirm Password"
						required
					/>
					<LoginButton
						value="Sign Up"
						classes="bg-gray-700 text-white"
						type="submit"
					/>
				</form>
			</div>
		);
	}
}

export default SignupForm;
