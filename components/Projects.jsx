import React from "react";
import HouseHunterImg from "../public/static/projects/house-hunter-3.png";
import GrandExchange from "../public/static/projects/grand-exchange-1.png";
import MovieDBImg from "../public/static/projects/MovieDB.png";
import ProjectDetail from "./ProjectDetail";
import CryptoImg from "../public/static/projects/crypto-app-1.png";
import FilmImg from "../public/static/projects/film-buff-1.png";

const Projects = () => {
	return (
		<div id="projects" className="w-full">
			<div className="max-w-[1240px] mx-auto ox-2 py-16">
				<p className="text-xl tracking-widest uppercase text-[#008B8B]">
					Projects
				</p>
				<h2 className="py-4">What I&apos;ve Built</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<ProjectDetail
						title="House Hunter"
						backgroundImg={HouseHunterImg}
						projectUrl="/house-hunter"
						techs="Java | Spring | MySQL"
					/>

					<ProjectDetail
						title="Movie DB"
						backgroundImg={MovieDBImg}
						projectUrl="/movie-db"
						techs="Python | Flask | MySQL"
					/>

					<ProjectDetail
						title="Grand Exchange"
						backgroundImg={GrandExchange}
						projectUrl="/grand-exchange"
						techs="ReactJs | NextJs | Stripe | Sanity"
					/>

					<ProjectDetail
						title="Crypto Press"
						backgroundImg={CryptoImg}
						projectUrl="/crypto-app"
						techs="ReactJs | Tailwind CSS | Firebase"
					/>

					<ProjectDetail
						title="FilmBuff"
						backgroundImg={FilmImg}
						projectUrl="/film-buff"
						techs="ReactJs | Tailwind CSS | Firebase"
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
