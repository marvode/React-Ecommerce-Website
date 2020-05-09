export default class Token {
	static isValid(token) {
		const payload = this.payload(token);
		console.log(payload)
		if (payload) {
			return payload.iss === ("http://127.0.0.1:8000/oauth/token" ||
				"http://127.0.0.1:8000/users")
				? true
				: false;
		}
		return false;
	}

	static payload(token) {

		const payload = token.split(".")[1];
		return this.decode(payload);
	}

	static decode(payload) {
		return JSON.parse(atob(payload));
	}
}
