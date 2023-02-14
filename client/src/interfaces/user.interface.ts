export interface IUser {
	id: number;
	firstName: string;
	lastName: string;
	username: string;
	email: string;
}

export interface IAuthResponse {
	user: IUser;
	accessToken: string;
}
