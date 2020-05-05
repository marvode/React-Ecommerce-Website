import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage";
import Login from "./pages/login";
import Shop from "./pages/shop";
import PageHeader from "./layout/navigation/header";

function App() {
	return (
		<div className="App text-gray-800">
			<PageHeader />
			<div className="py-8 px-6 sm:px-12">
				<Switch>
					<Route exact path="/" component={Homepage}></Route>
					<Route path="/login" component={Login}></Route>
					<Route path="/shop" component={Shop}></Route>
				</Switch>
			</div>
		</div>
	);
}

export default App;
