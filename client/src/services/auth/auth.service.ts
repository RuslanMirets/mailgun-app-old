import { axiosClassic } from "@/api/interceptor";
import { IAuthResponse } from "@/interfaces/user.interface";
import { saveToStorage, removeTokenToStorage } from "./auth.helper";

export const AuthService = {
	async login(email: string, password: string) {
		const response = await axiosClassic.post<IAuthResponse>("/auth/login", {
			email,
			password,
		});
		if (response.data.accessToken) saveToStorage(response.data);

		return response.data;
	},

	async register(email: string, password: string) {
		const response = await axiosClassic.post<IAuthResponse>("/auth/register", {
			email,
			password,
		});
		if (response.data.accessToken) saveToStorage(response.data);

		return response.data;
	},

	logout() {
		removeTokenToStorage();
		localStorage.removeItem("user");
	},
};
