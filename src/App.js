import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

import Homepage from "./pages/homepage";
import Login from "./pages/login";
import Checkout from "./pages/checkout";
import CategoryPage from "./pages/category";
import PageHeader from "./layout/navigation/header";

import { setCurrentUser, setUserToken } from "./redux/user/user-action";
import User from "./utils/User";
import { setAuthorizationHeader } from "./utils/AppConfig";

axios.defaults.baseURL = "http://127.0.0.1:8000";

// const token = AppStorage.getAccessToken();
// axios.defaults.headers.common = {
// 	"X-Requested-With": "XMLHttpRequest",
// 	"Content-Type": "application/json",
// 	Accept: "application/json",
// 	Authorization: `Bearer ${token}`,
// };

class App extends Component {
	componentDidMount() {
		if (this.props.currentUserToken) {
			setAuthorizationHeader(this.props.currentUserToken.access_token);
			User.loggedInUser().then((res) => {
				this.props.setCurrentUser({ user: res });
			});
		}
	}
	render() {
		return (
			<div className="App text-gray-800">
				<PageHeader />
				<div className="py-8 px-6 sm:px-12">
					<Switch>
						<Route exact path="/" component={Homepage}></Route>
						<Route
							path="/login"
							render={() =>
								this.props.currentUser ? (
									<Redirect to="/" />
								) : (
									<Login />
								)
							}
						></Route>
						<Route
							path="/categories"
							component={CategoryPage}
						></Route>
						<Route path="/checkout" component={Checkout} />
					</Switch>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
	currentUserToken: state.user.currentUserToken,
});

const matchDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
	setUserToken: (token) => dispatch(setUserToken(token)),
});

export default connect(mapStateToProps, matchDispatchToProps)(App);
