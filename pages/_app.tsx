import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Themeprovider } from "../theme/Themeprovider";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Themeprovider>
			<Component {...pageProps} />
		</Themeprovider>
	);
}

export default MyApp;
