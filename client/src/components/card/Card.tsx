import { Heading } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";
import styles from "./Card.module.scss";

interface ICard {
	title: string;
}

const Card: FC<PropsWithChildren<ICard>> = ({ children, title }) => {
	return (
		<div className={styles.root}>
			<Heading>{title}</Heading>
			<div className={styles.card}>{children}</div>
		</div>
	);
};

export default Card;
