import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Homepage from "./pages/homepage";
import Login from "./pages/login";
import PageHeader from "./layout/navigation/header";

function App() {
	return (
		<div className="App text-gray-800">
			<PageHeader />
			<div className="py-8 px-6">
				<BrowserRouter>
					<Route exact path="/" component={Homepage}></Route>
					<Route path="/login" component={Login}></Route>
		
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
