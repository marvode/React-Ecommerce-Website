import axios from "axios";

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

	static async loggedInUser() {
		let response = [];
		await axios
			.get("/users/me")
			.then((res) => response.push(res.data.data))
			.catch((error) => response.push(error.response.data));
		return response[0];
	}
}
