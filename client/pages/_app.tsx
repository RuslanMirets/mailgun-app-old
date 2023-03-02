import { wrapper } from "@/store";
import { getMe } from "@/store/actions/user";
import "@/styles/globals.scss";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import type { AppProps } from "next/app";
import { theme } from "../theme";

function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

App.getInitialProps = wrapper.getInitialAppProps((store) => async ({ ctx }) => {
	await store.dispatch(getMe(ctx));
	return { pageProps: {} };
});

export default wrapper.withRedux(App);
