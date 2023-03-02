import { IUser } from "@/interfaces/user.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export interface UserState {
	user: IUser | null;
	registerData: IUser | null;
}

const initialState: UserState = {
	user: null,
	registerData: null,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		login(state, action: PayloadAction<IUser>) {
			state.user = action.payload;
		},
		register(state, action: PayloadAction<IUser>) {
			state.registerData = action.payload;
		},
		logout(state) {
			state.user = null;
		},
	},
	extraReducers: {
		[HYDRATE]: (state, action) => {
			return { ...state, ...action.payload.user };
		},
	},
});

export const userReducer = userSlice.reducer;
