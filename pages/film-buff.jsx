import React from "react";
import FilmImg from "../public/static/projects/film-buff-2.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const film = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[30vh] lg:h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={FilmImg}
					alt="/"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">Film Buff</h2>
					<h3>ReactJs | Firebase | Tailwind CSS </h3>
				</div>
			</div>
			<div className="max-w-[1240] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
				<div className="col-span-4">
					<p>Project</p>
					<h2 className="pb-2">Overview</h2>
					<p>
						Developed front-end with ReactJs, Tailwind CSS and Firebase.
						This application allows users to create an account, save
						their favorite movies, and read reviews. This application was
						developed with a mobile-first approach and is hosted with
						Firebase
					</p>
					<br />
					<p className="font-semibold">Test Credentials:</p>
					<p>Email: Test@gmail.com</p>
					<p>Password: Pass123456</p>
					<Link
						target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/Gullord-Christian/Film_Buff">
						<button className="px-8 py-2 mt-4 mr-8">Code</button>
					</Link>
					<Link
						rel="noopener noreferrer"
						target="_blank"
						href="https://film-buff-b0ff2.web.app//">
						<button className="px-8 py-2 mt-4 ">Demo</button>
					</Link>
				</div>
				<div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
					<div className="p-2">
						<p className="text-center font-bold pb-2">Technologies</p>
						<div className="grid grid-cols-3 md:grid-cols-1">
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								ReactJs
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Firebase
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Tailwind CSS
							</p>
						</div>
					</div>
				</div>
				<Link href="/#projects">
					<p className="cursor-pointer underline">Back to projects</p>
				</Link>
			</div>
		</div>
	);
};

export default film;
