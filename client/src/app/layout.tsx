"use client";

import "@/styles/globals.scss";
import theme from "@/utils/theme";
import { ChakraProvider, Container } from "@chakra-ui/react";
import "@fontsource/manrope";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru">
			<head />
			<body>
				<ChakraProvider theme={theme}>
					<Container maxW="4xl">
						<div className="wrapper">
							<main>{children}</main>
						</div>
					</Container>
				</ChakraProvider>
			</body>
		</html>
	);
}
