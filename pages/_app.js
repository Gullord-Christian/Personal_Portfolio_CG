import "../styles/globals.css";
import "../styles/about.css";

import Navbar from "../components/Navbar";
function MyApp({ Component, pageProps }) {
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
