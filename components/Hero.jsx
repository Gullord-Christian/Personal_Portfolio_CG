import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

const Hero = () => {
	return (
		<div>
			<div className="custom-shape-divider-top-1664048862">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none">
					<path
						d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
						class="shape-fill"></path>
				</svg>
			</div>
			<div id="hero" className="w-full h-[80vh] text-center">
				<div className="max-w-[1240px] w-full h-[90%] mx-auto p-2 flex justify-center items-center ">
					<div className="mt-[170px]">
						<h1 className="py-4 text-gray-800">
							Hi, I&apos;m{" "}
							<span className="md:text-[#008B8B]"> Christian</span>
						</h1>
						<h2 className="py-2 text-gray-800">
							Software{" "}
							<span className="text-[#008b8b] md:text-[#212831] ">
								Developer
							</span>
						</h2>
						<p className="py-4 text-gray-600 max-w-[70%] m-auto">
							I&apos;m a full-stack developer who loves to build fully
							functional web applications. I&apos;ve recently graduated
							from a software development bootcamp and my goal is to
							make an impact at a great company by building real-world
							applications for real people. I&apos;ve recently started
							to shift my focus towards mobile-first development.
						</p>
						<div className="flex items-center justify-between max-w-[330px] m-auto py-4">
							<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 hover:text-[#008B8B]">
								<Link
									target="_blank"
									href="https://www.linkedin.com/in/christian-gullord-52622a13b/">
									<FaLinkedinIn />
								</Link>
							</div>
							<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 hover:text-[#008B8B]">
								<Link
									target="_blank"
									rel="noreferrer"
									href="https://github.com/Gullord-Christian">
									<FaGithub />
								</Link>
							</div>
							<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 hover:text-[#008B8B]">
								<Link
									target="_blank"
									rel="noreferrer"
									href="mailto:gullord.christian@gmail.com">
									<AiOutlineMail />
								</Link>
							</div>
							<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 hover:text-[#008B8B]">
								<Link href="/#contact">
									<BsFillPersonLinesFill />
								</Link>
							</div>
						</div>
						<p className="uppercase text-lg tracking-widest text-gray-800 py-4">
							Let&apos;s Connect{" "}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
