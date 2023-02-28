import "@/styles/globals.scss";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import type { AppProps } from "next/app";
import { theme } from "../theme";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
