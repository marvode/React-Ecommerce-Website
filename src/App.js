import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Homepage from "./pages/homepage";
import PageHeader from "./layout/navigation/header";

import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
    <div className="App">
      <PageHeader/>
			<BrowserRouter>
				<Route exact path="/">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<p>
							Edit <code>src/App.js</code> and save to reload.
						</p>
						<a
							className="App-link"
							href="https://reactjs.org"
							target="_blank"
							rel="noopener noreferrer"
						>
							Learn React
						</a>
					</header>
				</Route>
				<Route exact path="/home" component={Homepage}></Route>
			</BrowserRouter>
		</div>
	);
}

export default App;
