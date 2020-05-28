import React, { Component } from "react";

export default class ErrorBoundary extends Component {
	constructor() {
		super();
		this.state = {
			hasError: false,
		};
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		console.log(error);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div>
					<div className="grid sm:grid-cols-3">
						<div></div>
						<img
							className="flex justify-center align-middle"
							src="https://i.imgur.com/A040Lxr.png"
							alt=""
						/>
					</div>
					<h1 className="text-center text-3xl">
						...Ops! Something went wrong
					</h1>
				</div>
			);
		}
		return this.props.children;
	}
}
