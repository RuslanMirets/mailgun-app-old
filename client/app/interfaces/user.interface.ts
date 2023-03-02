export interface IUser {
	id: number;
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	createdAt: Date;
	updatedAt: Date;
	accessToken: string;
}
export interface IUserLogin {
	name: string;
	email: string;
}
export interface IUserRegister {
	name: string;
	email: string;
	password: string;
}

// export interface IUser {
// 	id: number;
// 	firstName: string;
// 	lastName: string;
// 	username: string;
// 	email: string;
// 	createdAt: Date;
// 	updatedAt: Date;
// }

// export interface IAuthResponse {
// 	user: IUser;
// 	accessToken: string;
// }
