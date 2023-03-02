import { useAppDispatch } from "@/store/hooks";
import { alertSlice } from "@/store/slices/alert";
import { Snackbar, Alert } from "@mui/material";
import { FC } from "react";

interface IProps {
	body: string | string[];
	severity: any;
}

export const Toast: FC<IProps> = ({ body, severity }) => {
	const dispatch = useAppDispatch();

	const handleShow = (
		event?: React.SyntheticEvent | Event,
		reason?: string,
	) => {
		if (reason === "clickaway") {
			return;
		}

		dispatch(alertSlice.actions.success(""));
		dispatch(alertSlice.actions.errors(""));
	};

	return (
		<Snackbar open autoHideDuration={4000} onClose={handleShow}>
			<Alert onClose={handleShow} severity={severity} sx={{ width: "100%" }}>
				{typeof body === "string" ? (
					body
				) : (
					<ul>
						{body.map((text, index) => (
							<li key={index}>{text}</li>
						))}
					</ul>
				)}
			</Alert>
		</Snackbar>
	);
};
