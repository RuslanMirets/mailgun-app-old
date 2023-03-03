import { IMail } from "@/interfaces/mail.interface";
import { postAPI } from "@/utils/fetchData";
import { AppDispatch } from "..";
import { alertSlice } from "../slices/alert";

export const createMail = (data: IMail) => async (dispatch: AppDispatch) => {
	try {
		await postAPI("mail/send", data);

		dispatch(alertSlice.actions.success("Письмо успешно отправлено"));
	} catch (error: any) {
		dispatch(alertSlice.actions.errors(error.response.data.message));
	}
};
