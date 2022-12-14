import React from "react";
import MovieDBImg from "../public/static/projects/MovieDB-2.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const movie = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[30vh] lg:h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={MovieDBImg}
					alt="/"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">Pick That Movie</h2>
					<h3>Python | Flask | MySQL </h3>
				</div>
			</div>
			<div className="max-w-[1240] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
				<div className="col-span-4">
					<p>Project</p>
					<h2 className="pb-2">Overview</h2>
					<p>
						Designed a movie library review website with object oriented
						programming, streamlined user login experience using Python &
						Flask and Database in MySQL. Complete with session and form
						validations, and password protection with BCrypt. Session is
						used to validate user is signed in to view any webpages.
						Users can add their favorite movies to database and submit a
						review of the movie. Users can see all other user reviews but
						can only edit or delete their own review
					</p>
					<Link
						target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/Gullord-Christian/MovieDB">
						<button className="px-8 py-2 mt-4 mr-8">Code</button>
					</Link>
					<Link
						target="_blank"
						rel="noopener noreferrer"
						href="http://3.137.220.136/">
						<button className="px-8 py-2 mt-4 ">Demo</button>
					</Link>
				</div>
				<div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
					<div className="p-2">
						<p className="text-center font-bold pb-2">Technologies</p>
						<div className="grid grid-cols-3 md:grid-cols-1">
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Python
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Flask
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								MySQL
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Jinja2
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								CSS
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Bootstrap
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

export default movie;
