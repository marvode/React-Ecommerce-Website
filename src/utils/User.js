import axios from "axios";
import AppStorage from "./AppStorage";

export default class User {
	static async signup(data) {
		let response = [];
		await axios
			.post("/users", data)
			.then((res) => response.push(res.data))
			.catch((error) => response.push(error.response.data));
		return response[0];
	}

	static async login(data) {
		let response = [];
		await axios
			.post("oauth/token", data)
			.then((res) => {
				response.push(res.data);
				// console.log(res.data);
				// this.responseAfterLogin(res.data);
			})
			.catch((error) => response.push(error));
		return response[0];
	}

	static responseAfterLogin(token_info) {
		AppStorage.storeAuthInfo(token_info);
	}

	static async loggedInUser() {
		let response = [];
		await axios
			.get("/users/me")
			.then((res) => response.push(res.data.data))
			.catch((error) => response.push(error.response.data));
		return response[0];
	}

	static isLoggedIn() {
		const token = AppStorage.getAccessToken()
		if(token) {
			return true;
		};
		return false;
	}

	static logout() {
		AppStorage.clear();
		window.location = "/";
	}
}
