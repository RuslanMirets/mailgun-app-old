import { IAuthResponse } from "@/interfaces/user.interface";
import Cookies from "js-cookie";

export const saveTokenToStorage = (accessToken: string) => {
	Cookies.set("accessToken", accessToken);
};

export const removeTokenToStorage = () => {
	Cookies.remove("accessToken");
};

export const saveToStorage = (data: IAuthResponse) => {
	saveTokenToStorage(data.accessToken);
	localStorage.setItem("user", JSON.stringify(data.user));
};
