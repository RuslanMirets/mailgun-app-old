import { Heading } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";
import styles from "./AuthCard.module.scss";

const AuthCard: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.root}>
			<Heading>Авторизация</Heading>
			<div className={styles.card}>{children}</div>
		</div>
	);
};

export default AuthCard;
