import React, { Component } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

export default class Login extends Component {
	constructor() {
		super();
        this.state = {
            login: {

            },
            signup: {
                
            }
        };
	}

	handleLoginForm = (e) => {
		e.preventDefault();
	};

	handleSignupForm = (e) => {
		e.preventDefault();
	};

	render() {
		return (
			<div className="flex justify-center py-16">
				<div className="sm:grid sm:grid-cols-2 gap-32 ">
					<LoginForm submit={this.handleLoginForm} classes="mb-16 sm:my-16"/>
					<SignupForm submit={this.handleSignupForm} />
				</div>
			</div>
		);
	}
}
