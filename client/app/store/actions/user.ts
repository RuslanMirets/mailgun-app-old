import { AppDispatch } from "./../index";
import { IUser } from "./../../interfaces/user.interface";
import { userSlice } from "../slices/user";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { getAPI, postAPI } from "@/utils/fetchData";
import { alertSlice } from "../slices/alert";

export const login = (data: IUser) => async (dispatch: AppDispatch) => {
	try {
		const response = await postAPI("auth/login", data);
		setCookie(null, "mailgunToken", response.data.accessToken, {
			maxAge: 30 * 24 * 60 * 60,
			path: "/",
		});
		dispatch(userSlice.actions.login(response.data));
		dispatch(alertSlice.actions.success("Успешная авторизация"));
	} catch (error: any) {
		dispatch(alertSlice.actions.errors(error.response.data.message));
	}
};

export const register = (data: IUser) => async (dispatch: AppDispatch) => {
	try {
		const response = await postAPI("auth/register", data);
		dispatch(userSlice.actions.register(response.data));
		dispatch(alertSlice.actions.success("Успешная регистрация"));
	} catch (error: any) {
		dispatch(alertSlice.actions.errors(error.response.data.message));
	}
};

export const logout = () => async (dispatch: AppDispatch) => {
	try {
		destroyCookie(null, "mailgunToken");
		dispatch(userSlice.actions.logout());
	} catch (error: any) {
		dispatch(alertSlice.actions.errors(error.response.data.message));
	}
};

export const getMe = (ctx: any) => async (dispatch: AppDispatch) => {
	try {
		const { mailgunToken } = parseCookies(ctx);
		const response = await getAPI("user/profile", mailgunToken);
		dispatch(userSlice.actions.login(response.data));
	} catch (error) {
		console.log("Unauthorized");
	}
};
