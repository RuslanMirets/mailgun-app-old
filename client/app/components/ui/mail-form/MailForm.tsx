import { MailFormSchema } from "@/utils/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormField } from "../form-field/FormField";
import styles from "./MailForm.module.scss";

const MailForm: FC = () => {
	const methods = useForm({
		mode: "onChange",
		resolver: yupResolver(MailFormSchema),
	});

	const onSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<FormProvider {...methods}>
			<form className={styles.root} onSubmit={methods.handleSubmit(onSubmit)}>
				<FormField type="email" label="Email" name="email" />
				<FormField type="text" label="Тема" name="subject" />
				<FormField
					label="Сообщение"
					name="message"
					multiline
					rows={4}
					maxRows={4}
				/>
				<Button
					variant="contained"
					type="submit"
					disabled={methods.formState.isSubmitting}
				>
					{methods.formState.isSubmitting ? "Отправка" : "Отправить"}
				</Button>
			</form>
		</FormProvider>
	);
};

export default MailForm;
