import { FC, PropsWithChildren } from "react";
import styles from "./Layout.module.scss";
import Header from "./header/Header";
import { ISeo } from "./meta/meta.interface";
import Meta from "./meta/Meta";

interface ILayout extends ISeo {}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
	return (
		<>
			<Meta {...rest} />
			<div className={styles.layout}>
				<Header />
				<main>{children}</main>
			</div>
		</>
	);
};

export default Layout;