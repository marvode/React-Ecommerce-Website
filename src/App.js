import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

import Homepage from "./pages/homepage";
import Login from "./pages/login";
import Shop from "./pages/shop";
import Checkout from './pages/checkout'
import PageHeader from "./layout/navigation/header";

import { setCurrentUser, setUserToken } from "./redux/user/user-action";
import AppStorage from "./utils/AppStorage";
import User from "./utils/User";

axios.defaults.baseURL = "http://127.0.0.1:8000";

const token = AppStorage.getAccessToken();
axios.defaults.headers.common = {
	"X-Requested-With": "XMLHttpRequest",
	"Content-Type": "application/json",
	Accept: "application/json",
	Authorization: `Bearer ${token}`,
};

class App extends Component {
	componentDidMount() {
		if (User.isLoggedIn()) {
			User.loggedInUser().then((res) => {
				this.props.setCurrentUser({ user: res });
				this.props.setUserToken({ access_token: token, refresh_token: AppStorage.getRefreshToken() });
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
						<Route path="/shop" component={Shop}></Route>
						<Route path="/checkout" component={Checkout}/>
					</Switch>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
});

const matchDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
	setUserToken: (token) => dispatch(setUserToken(token))
});

export default connect(mapStateToProps, matchDispatchToProps)(App);
