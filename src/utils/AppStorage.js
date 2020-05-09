class AppStorage {
	static getAccessToken() {
		return localStorage.getItem("access_token");
	}

	static getRefreshToken() {
		return localStorage.getItem("refresh_token");
	}

	static storeAuthInfo(token) {
		localStorage.setItem("access_token", token.access_token);
		localStorage.setItem("refresh_token", token.refresh_token);
	}

	static clear() {
		localStorage.removeItem("token");
	}
}

export default AppStorage;
