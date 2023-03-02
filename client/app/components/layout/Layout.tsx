import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { Alert } from "../ui/alert/Alert";

interface ILayout {
	title: string;
	description?: string;
	keywords?: string;
}

const Layout: FC<PropsWithChildren<ILayout>> = ({
	children,
	title,
	description,
	keywords,
}) => {
	return (
		<>
			<Head>
				<title>{title + " | Mailgun App"}</title>
				<meta name="description" content={`Описание. ` + description} />
				<meta name="robots" content="index, follow" />
				<meta name="keywords" content={keywords || ""} />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="wrapper">
				<Alert />
				<main>{children}</main>
			</div>
		</>
	);
};

export default Layout;
