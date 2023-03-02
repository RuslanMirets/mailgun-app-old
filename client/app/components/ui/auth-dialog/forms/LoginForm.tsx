import { LoginFormSchema } from "@/utils/validation";
import { Button } from "@mui/material";
import { FC } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { FormField } from "../../form-field/FormField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "@/store/hooks";
import { login } from "@/store/actions/user";

const LoginForm: FC = () => {
	const dispatch = useAppDispatch();

	const methods = useForm({
		mode: "onChange",
		resolver: yupResolver(LoginFormSchema),
	});

	const onSubmit = (data: any) => {
		dispatch(login(data));
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<FormField type="text" label="Email" name="email" />
				<FormField type="password" label="Пароль" name="password" />
				<Button
					disabled={
						!methods.formState.isValid || methods.formState.isSubmitting
					}
					type="submit"
					color="primary"
					variant="contained"
				>
					Войти
				</Button>
			</form>
		</FormProvider>
	);
};

export default LoginForm;
