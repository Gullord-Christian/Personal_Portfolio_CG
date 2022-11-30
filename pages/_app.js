import "../styles/globals.css";
import "../styles/about.css";
import { Toaster } from "react-hot-toast";

import Navbar from "../components/Navbar";
function MyApp({ Component, pageProps }) {
	return (
		<>
			<Toaster toastOptions={{
				// Define default options
				className: '',
				duration: 7000,
				style: {
					background: '#363636',
					color: '#fff',
					padding: '30px',
				}
			}} />
			<Navbar />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
