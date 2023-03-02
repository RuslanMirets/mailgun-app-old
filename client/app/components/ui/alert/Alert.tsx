import { useAppSelector } from "@/store/hooks";
import { FC } from "react";
import { Toast } from "./toast/Toast";

export const Alert: FC = () => {
	const { success, errors } = useAppSelector((state) => state.alert);

	return (
		<>
			{success && <Toast severity="success" body={success} />}
			{errors && <Toast severity="error" body={errors} />}
		</>
	);
};
