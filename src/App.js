import React, { useEffect } from "react";
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
import { selectCurrentUser } from "./redux/user/user-selectors";

axios.defaults.baseURL = "http://127.0.0.1:8000";

const App = (props) => {
	console.log(props);
	const checkUserSession = () => {
		if (props.currentUserToken) {
			setAuthorizationHeader(props.currentUserToken.access_token);
			User.loggedInUser().then((res) => {
				props.setCurrentUser({ user: res });
			});
		}
	};

	useEffect(() => {
		checkUserSession();
	}, [props.setCurrentUser]);

	return (
		<div className="App text-gray-800">
			<PageHeader />
			<div className="py-8 px-6 sm:px-12">
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route
						path="/login"
						render={() =>
							props.currentUser ? <Redirect to="/" /> : <Login />
						}
					></Route>
					<Route path="/categories" component={CategoryPage}></Route>
					<Route path="/checkout" component={Checkout} />
				</Switch>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	currentUser: selectCurrentUser(state),
	currentUserToken: state.user.currentUserToken,
});

const matchDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
	setUserToken: (token) => dispatch(setUserToken(token)),
});

export default connect(mapStateToProps, matchDispatchToProps)(App);
