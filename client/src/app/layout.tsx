"use client";

import "@/styles/globals.scss";
import theme from "@/utils/theme";
import { ChakraProvider } from "@chakra-ui/react";
// import { Manrope } from "@next/font/google";
import "@fontsource/manrope";

// const manrope = Manrope({
// 	weight: ["400", "500", "600", "700"],
// 	variable: "--manrope-font",
// });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body>
				<ChakraProvider theme={theme}>
					<div className="wrapper">
						<main>{children}</main>
					</div>
				</ChakraProvider>
			</body>
		</html>
	);
}
