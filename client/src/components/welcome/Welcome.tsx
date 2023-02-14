import { Button, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";
import styles from "./Welcome.module.scss";

const Welcome: FC = () => {
	return (
		<div className={styles.root}>
			<Heading className={styles.title} as="h1" size="4xl">
				Mailgun App
			</Heading>
			<div className={styles.buttons}>
				<Link href="/login">
					<Button colorScheme="teal" variant="solid">
						Войти
					</Button>
				</Link>
				<Link href="/register">
					<Button colorScheme="teal" variant="outline">
						Зарегистрироваться
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default Welcome;
