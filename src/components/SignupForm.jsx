import React, { Component } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Label from "../components/Label";

class SignupForm extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleSignupForm = (e) => {
		e.preventDefault();
	};

	render() {
		return (
			<div
				className={`bg-white shadow-md rounded px-8 py-6 ${this.props.classes}`}
			>
				<p className="pb-4 text-xl">Create A New Account</p>
				<form onSubmit={this.handleSignupForm}>
					<Label value="Name" />
					<Input name="name" placeholder="Name" type="text" />
					<Label value="Email" />
					<Input name="email" placeholder="Email" type="email" />
					<Label value="Password" />
					<Input
						name="password"
						placeholder="Password"
						type="password"
					/>
					<Label value="Confirm Password" />
					<Input
						name="password_confirmation"
						placeholder="Confirm Password"
						type="password"
					/>
					<Button
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
