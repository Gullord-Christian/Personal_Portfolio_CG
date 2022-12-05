import React from "react";
import HouseImg from "../public/static/projects/house-hunter-1.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const houseHunter = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[30vh] lg:h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/90 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={HouseImg}
					alt="/"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">House Hunter</h2>
					<h3>Java | Spring | MySQL </h3>
				</div>
			</div>
			<div className="max-w-[1240] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
				<div className="col-span-4">
					<p>Project</p>
					<h2 className="pb-2">Overview</h2>
					<p>
						An application to find your dream home and allow realtors to
						list their properties. Integrated back-end with Java and
						Spring Framework, incorporated JSP for front-end. Users can
						register an account, view home details, add notes about a
						listing and save houses to view later. Validations and
						password protection with BCrypt. Implemented database with
						JPA and MySQL to store house, agent, note and user details.
						Agents can register an account, login, and add listings to
						the site. Agents can only edit or remove their own listings.
					</p>
					<br />
					<p className="font-semibold">Test Credentials:</p>
					<p>Email: Test@gmail.com</p>
					<p>Password: Pass123456</p>
					<Link
						target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/Gullord-Christian/HouseHunter">
						<button className="px-8 py-2 mt-4 mr-8">Code</button>
					</Link>
					<Link
						rel="noopener noreferrer"
						target="_blank"
						href="http://18.116.169.43/">
						<button className="px-8 py-2 mt-4">Demo</button>
					</Link>
				</div>
				<div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
					<div className="p-2">
						<p className="text-center font-bold pb-2">Technologies</p>
						<div className="grid grid-cols-3 md:grid-cols-1">
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Java
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Spring
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								MySQL
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								JSP/JSTL
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

export default houseHunter;
