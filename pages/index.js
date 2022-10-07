import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Christian Gullord</title>
			</Head>
			<Hero />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}
