import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import { FC } from "react";
import styles from "./Welcome.module.scss";

const Welcome: FC = () => {
	return (
		<Box className={styles.root}>
			<Container maxWidth="lg">
				<Box className={styles.body}>
					<Typography className={styles.title} variant="h2" component="h1">
						Mailgun App
					</Typography>
					<Box className={styles.buttons}>
						<Link href="/login">
							<Button variant="contained">Войти</Button>
						</Link>
						<Link href="/register">
							<Button variant="outlined">Зарегистрироваться</Button>
						</Link>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Welcome;
