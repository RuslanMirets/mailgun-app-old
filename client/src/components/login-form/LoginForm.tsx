import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
	Button,
	InputRightElement,
	InputGroup,
	Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./LoginForm.module.scss";

const LoginForm: FC = () => {
	const [showPassword, setShowPassword] = useState(false);

	const {
		handleSubmit,
		register,
		reset,
		formState: { errors, isSubmitting },
	} = useForm();

	const onSubmit = (data: any) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				alert(JSON.stringify(data, null, 2));
				resolve();
				reset();
			}, 3000);
		});
	};

	return (
		<form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
			<FormControl isInvalid={errors.email}>
				<FormLabel htmlFor="email">Email</FormLabel>
				<Input
					id="email"
					placeholder="Email"
					focusBorderColor="teal.600"
					{...register("email", {
						required: "Введите email",
						pattern: {
							value: /\S+@\S+\.\S+/,
							message: "Некорректный email",
						},
					})}
				/>
				<FormErrorMessage>
					{errors.email && errors.email.message}
				</FormErrorMessage>
			</FormControl>
			<FormControl isInvalid={errors.password}>
				<FormLabel htmlFor="password">Пароль</FormLabel>
				<InputGroup>
					<Input
						id="password"
						type={showPassword ? "text" : "password"}
						placeholder="Пароль"
						focusBorderColor="teal.600"
						{...register("password", {
							required: "Введите пароль",
							minLength: {
								value: 6,
								message: "Минимальная длина должна составлять 6 символов",
							},
						})}
					/>
					<InputRightElement>
						<Button
							variant={"ghost"}
							onClick={() => setShowPassword((showPassword) => !showPassword)}
						>
							{showPassword ? <ViewOffIcon /> : <ViewIcon />}
						</Button>
					</InputRightElement>
				</InputGroup>
				<FormErrorMessage>
					{errors.password && errors.password.message}
				</FormErrorMessage>
			</FormControl>
			<Button
				className={styles.submit}
				type="submit"
				colorScheme="teal"
				isLoading={isSubmitting}
				loadingText="Вход"
			>
				Войти
			</Button>
			<div className={styles.foot}>
				<Text>Еще не являетесь пользователем?</Text>
				<Link href="/register">
					<Button variant="link">Зарегистрируйтесь</Button>
				</Link>
			</div>
		</form>
	);
};

export default LoginForm;
