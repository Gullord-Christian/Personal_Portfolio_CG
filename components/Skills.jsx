import React from "react";
import Image from "next/image";
import pythonImg from "../public/static/skills/python.png";
const Skills = () => {
	return (
		<div id="skills" className="w-full lg:h-screen p-2">
			<div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
				<p className="text-xl tracking-widest uppercase text-[#008B8B]">
					Skills
				</p>
				<h2 className="py-2">What I Can Do </h2>
				<div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
					<div className="p-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src={pythonImg}
									alt="python"
									width="64px"
									height="64px"
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h2>Python</h2>
							</div>
						</div>
					</div>

					<div className="p-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="/static/skills/java.png"
									alt="java"
									width="100px"
									height="64px"
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h2>Java</h2>
							</div>
						</div>
					</div>

					<div className="p-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="/static/skills/react.png"
									alt="react"
									width="64px"
									height="64px"
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h2>React Js</h2>
							</div>
						</div>
					</div>

					<div className="p-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="/static/skills/spring.png"
									alt="Spring"
									width="64px"
									height="64px"
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h2>Spring</h2>
							</div>
						</div>
					</div>

					<div className="p-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									width="64px"
									height="64px"
									src="/static/skills/javascript.png"
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h2>Javascript</h2>
							</div>
						</div>
					</div>

					<div className="p-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="/static/skills/html.png"
									width="64px"
									height="64px"
									language="html"
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h2>HTML</h2>
							</div>
						</div>
					</div>

					<div className="p-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="/static/skills/nextjs.png"
									width="64px"
									height="64px"
									alt="Next Js"
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h2>Next Js</h2>
							</div>
						</div>
					</div>

					<div className="p-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="/static/skills/node.png"
									width="64px"
									height="64px"
									alt="Node Js"
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h2>Node Js</h2>
							</div>
						</div>
					</div>

					<div className="p-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="/static/skills/tailwind.png"
									alt="tailwind"
									width="64px"
									height="64px"
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h2>Tailwind CSS</h2>
							</div>
						</div>
					</div>

					<div className="p-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="/static/skills/bootstrap-logo.png"
									alt="bootstrap"
									width="64px"
									height="64px"
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h2>Bootstrap</h2>
							</div>
						</div>
					</div>
					<div className="p-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="/static/skills/mysql.png"
									alt="my sql"
									width="80px"
									height="64px"
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h2>My SQL</h2>
							</div>
						</div>
					</div>

					<div className="p-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="/static/skills/mongo.png"
									alt="mongoDB"
									width="64px"
									height="64px"
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h2>Mongo DB</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
