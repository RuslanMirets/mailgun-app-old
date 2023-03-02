import { Box, Button, Container, Typography } from "@mui/material";
import { FC, useState } from "react";
import AuthDialog from "../auth-dialog/AuthDialog";
import styles from "./Welcome.module.scss";

const Welcome: FC = () => {
	const [open, setOpen] = useState(false);
	const toggleAuthDialog = () => {
		setOpen(!open);
	};
	const openAuthDialog = () => {
		toggleAuthDialog();
	};

	return (
		<Box className={styles.root}>
			<Container maxWidth="lg">
				<Box className={styles.body}>
					<Typography className={styles.title} variant="h2" component="h1">
						Mailgun App
					</Typography>
					<Box className={styles.buttons}>
						<Button variant="contained" onClick={openAuthDialog}>
							Авторизация
						</Button>
						{/* <Button variant="outlined" onClick={openAuthDialog}>
							Зарегистрироваться
						</Button> */}
					</Box>
				</Box>
			</Container>
			<AuthDialog open={open} onClose={toggleAuthDialog} />
		</Box>
	);
};

export default Welcome;
