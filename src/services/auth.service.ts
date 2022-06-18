class AuthService {
	public static async loginUser(email: string, password: string) {
		let payload = { email, password }

		let res = await fetch("http://localhost:8000/auth/login", {
			method: "POST",
			body: JSON.stringify(payload),
		})
	}

	public static async registerUser(email: string, password: string) {
		let payload = { email, password }

		let res = await fetch("http://localhost:8000/auth/register", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		})

    return res
	}
}

export default AuthService
