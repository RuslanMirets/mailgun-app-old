"use client";

import AuthProvider from "@/providers/auth/AuthProvider";
import "@/styles/globals.scss";
import theme from "@/utils/theme";
import { ChakraProvider, Container } from "@chakra-ui/react";
import "@fontsource/manrope";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient({
	defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru">
			<head />
			<body>
				<QueryClientProvider client={queryClient}>
					<AuthProvider>
						<ChakraProvider theme={theme}>
							<Container maxW="4xl">
								<div className="wrapper">
									<main>{children}</main>
								</div>
							</Container>
						</ChakraProvider>
					</AuthProvider>
				</QueryClientProvider>
			</body>
		</html>
	);
}
