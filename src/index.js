import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import "./css/tailwind.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import * as serviceWorker from "./serviceWorker";

import { store, persistor } from "./redux/store";
import App from "./App";

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);

serviceWorker.register();
