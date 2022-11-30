import React from "react";
import Link from "next/link";

const About = () => {
	return (
		<div>
			<div className="w-[75%] h-[65%] lg:w-[75%] m-auto shadow-xl shadow-gray-400 rounded-xl items-center hover:scale-105 align-center ease-in duration-300">
				<img
					className="rounded-xl max-w-[85%] md:mt-0 mt-6"
					src={"/static/images/unsplash-tech-2.jpg"}
					alt="laptop"
				/>
			</div>
			<div
				id="about"
				className="w-full h-[90vh] md:h-screen p-2 flex items-center py-16 layer1">
				<div className="m-auto max-w-[80%] ">
					<div className="col-span-2">
						<h2 className="uppercase text-xl tracking-widest text-[#008B8B] py-4">
							About Me
						</h2>
						<p className="py-2 text-gray-600">
							I&apos;ve spent the last 10 years working in the
							hospitality industry. From working in the Wine &
							Restaurant Industry in my hometown of Napa Valley. Living
							and working in the Sierra Nevada Mountain Range in Lake
							Tahoe. Most recently enjoying the beach life while
							working at boutique and large resort properties in San
							Diego.
						</p>{" "}
						<p className="py-2 text-gray-600">
							I&apos;ve always been interested in technology, computer
							games, video games, and really just a natural curiosity
							about all things tech related. After taking a few
							introductory courses, I realized I have a passion for
							progamming and decided to pursue a career in software
							development.
						</p>
						<p className="py-2 text-gray-600 underline cursor-pointer md:block hidden">
							<Link href="/#projects">
								Check out some of my latest projects
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
