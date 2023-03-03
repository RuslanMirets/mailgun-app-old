import { useAppSelector } from "@/store/hooks";
import { Box, Button, Container, Typography } from "@mui/material";
import { FC } from "react";
import styles from "./Header.module.scss";

const Header: FC = () => {
	const { user } = useAppSelector((state) => state.user);

	return (
		<header className={styles.root}>
			<Container className={styles.container} maxWidth="md">
				<Box className={styles.body}>
					<Typography>
						Вы вошли как <b>{user && user.firstName + " " + user.lastName}</b>
					</Typography>
					<Button variant="contained">Выйти</Button>
				</Box>
			</Container>
		</header>
	);
};

export default Header;
