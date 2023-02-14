import { useAuth } from "@/hooks/useAuth";
import { AuthService } from "@/services/auth/auth.service";
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
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginFields } from "./login-form.interface";
import styles from "./LoginForm.module.scss";

const LoginForm: FC = () => {
	const [showPassword, setShowPassword] = useState(false);

	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm<ILoginFields>({ mode: "onChange" });

	const { user, setUser } = useAuth();

	const {
		mutate: loginAsync,
		isLoading,
		isError,
	} = useMutation(
		["login"],
		(data: ILoginFields) => AuthService.login(data.email, data.password),
		{
			onSuccess(data) {
				if (setUser) setUser(data.user);
				reset();
			},
		},
	);

	const onSubmit: SubmitHandler<ILoginFields> = (data) => {
		loginAsync(data);
	};

	return (
		<form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
			{user && (
				<div>
					{user.email}, {user.username}
				</div>
			)}

			{isError && <div>Неверный логин или пароль</div>}
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
				isLoading={isLoading}
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
