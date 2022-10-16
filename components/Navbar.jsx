import React, { useState, useEffect } from "react";

import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { GiAbstract061, GiAbstract112 } from "react-icons/gi";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [bgNav, setBgNav] = useState("#ecf0f3");
	const [linkColor, setLinkColor] = useState("#1f2937");
	const [myLogo, setMyLogo] = useState();

	const router = useRouter();

	useEffect(() => {
		if (
			router.asPath === "/house-hunter" ||
			router.asPath === "/movie-db" ||
			router.asPath === "/grand-exchange" ||
			router.asPath === "/crypto-app" ||
			router.asPath === "/film-buff"
		) {
			setBgNav("transparent");
			setLinkColor("#ecf0f3");
			setMyLogo("0px");
		} else {
			setBgNav("#FDF5E6");
			setLinkColor("#1f2937");
			setMyLogo("80px");
		}
	}, [router]);

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener("scroll", handleShadow);
	}, []);

	return (
		<div
			style={{ backgroundColor: `${bgNav}` }}
			className={
				shadow
					? "fixed w-full h-20 shadow-xl z-[100]"
					: "fixed w-full h-20 z-[100]"
			}>
			<div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 cursor-pointer">
				<Link href="/">
					<div>
						<img
							style={{ height: `${myLogo}`, width: `${myLogo}` }}
							src={"/static/images/CG.png"}
						/>
					</div>
				</Link>
				<div>
					<ul
						style={{ color: `${linkColor}` }}
						className="hidden md:flex mr-1">
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b hover:text-[#008B8B]">
								Home
							</li>
						</Link>
						<Link href="/#about">
							<li className="ml-10 text-sm uppercase hover:border-b hover:text-[#008B8B]">
								About
							</li>
						</Link>
						<Link href="/#skills">
							<li className="ml-10 text-sm uppercase hover:border-b hover:text-[#008B8B]">
								Skills
							</li>
						</Link>
						<Link href="/#projects">
							<li className="ml-10 text-sm uppercase hover:border-b hover:text-[#008B8B]">
								Projects
							</li>
						</Link>
						<Link href="/#contact">
							<li className="ml-10 text-sm uppercase hover:border-b hover:text-[#008B8B]">
								Contact
							</li>
						</Link>
					</ul>
					<div onClick={handleNav} className="md:hidden mr-1">
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>
			<div
				className={
					nav
						? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
						: " "
				}>
				<div
					className={
						nav
							? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
							: "fixed left-[-100%] top-0 p-10 ease-in duration-500"
					}>
					<div>
						<div className="flex w-full items-center justify-between">
							<Link href="/">
								<GiAbstract061
									onClick={() => setNav(false)}
									size={65}
								/>
							</Link>
							<div
								onClick={handleNav}
								className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
								<AiOutlineClose />
							</div>
						</div>
						<div className="border-gray-300 my-4">
							<p className="w-[85%] md:w-[90%] py-4">
								Let&apos;s build something great
							</p>
						</div>
					</div>
					<div>
						<div className="py-4 flex flex-col">
							<ul className="uppercase">
								<Link href="/">
									<li
										onClick={() => setNav(false)}
										className="py-4 text-sm">
										Home
									</li>
								</Link>
								<Link href="/#about">
									<li
										onClick={() => setNav(false)}
										className="py-4 text-sm">
										About
									</li>
								</Link>
								<Link href="/#skills">
									<li
										onClick={() => setNav(false)}
										className="py-4 text-sm">
										Skills
									</li>
								</Link>
								<Link href="/#projects">
									<li
										onClick={() => setNav(false)}
										className="py-4 text-sm">
										Projects
									</li>
								</Link>
								<Link href="/#contact">
									<li
										onClick={() => setNav(false)}
										className="py-4 text-sm">
										Contact
									</li>
								</Link>
							</ul>
							<div className="pt-40">
								<p className="uppercase tracking-widest text-[#008B8B]">
									Let&apos;s Connect
								</p>
								<div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
										<a href="https://www.linkedin.com/in/christian-gullord-52622a13b/">
											<FaLinkedinIn />
										</a>
									</div>
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
										<a href="https://github.com/Gullord-Christian">
											<FaGithub />
										</a>
									</div>
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
										<a href="mailto:gullord.christian@gmail.com">
											<AiOutlineMail />
										</a>
									</div>
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
										<Link href="/#contact">
											<BsFillPersonLinesFill
												onClick={() => setNav(false)}
											/>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
