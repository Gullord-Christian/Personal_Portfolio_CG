import React from "react";

import Link from "next/link";

const About = () => {
	return (
		<div>
			<div className="w-[75%] h-[65%] lg:w-[65%] m-auto shadow-xl shadow-gray-400 rounded-xl items-center hover:scale-105 align-center ease-in duration-300">
				<img
					className="rounded-xl w-full md:mt-0 mt-6"
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
							Over the past two years, I&apos;ve had the privilege
							of fully immersing myself in the world of software
							development. Transitioning from a decade-long career
							in the vibrant hospitality industry—ranging from the
							wine and restaurant scene of Napa Valley to managing
							luxury resorts in San Diego—has been an incredible
							journey of growth and discovery.
						</p>{" "}
						<p className="py-2 text-gray-600">
							My lifelong fascination with technology, from
							computers and machines to video games, naturally led
							me to this career shift. After completing
							introductory courses that sparked my passion, I knew
							software development was the perfect fusion of my
							skills and interests. Now, with two years of
							hands-on experience, I&apos;m more excited than ever
							to continue honing my craft, building innovative
							solutions, and shaping the next chapter of my career
							in this dynamic field.
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
