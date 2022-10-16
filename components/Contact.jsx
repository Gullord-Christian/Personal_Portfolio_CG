import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
	return (
		<div id="contact" className="w-full lg:h-screen">
			<div className="max-w-[1240px] m-auto px-2 py-16 w-full">
				<p className="text-xl tracking-widest uppercase text-[#008B8B]">
					Contact
				</p>
				<h2 className="py-4">Get In Touch</h2>
				<div className="grid lg:grid-cols-5 gap-8">
					<div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<div className="lg:p-4 h-full">
							<div>
								<img
									className="rounded-xl hover:scale-105 ease-in duration-300"
									src="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
									alt="contact"
								/>
							</div>
							<div>
								<h2 className="py-4">Christian Gullord</h2>
								<p>Full-Stack Developer</p>
								<p className="py-4">
									I am currently seeking a full-time position as a
									full-stack, front-end or back-end developer.
								</p>
							</div>
							<div>
								<p className="uppercase pt-8">Connect with me</p>
								<div>
									<div className="flex items-center justify-between max-w-[330px] m-auto py-4">
										<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
											<Link
												target="_blank"
												href="https://www.linkedin.com/in/christiangullord/">
												<FaLinkedinIn />
											</Link>
										</div>
										<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
											<Link
												target="_blank"
												href="https://github.com/Gullord-Christian">
												<FaGithub />
											</Link>
										</div>
										<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
											<Link
												target="_blank"
												href="mailto:gullord.christian@gmail.com">
												<AiOutlineMail />
											</Link>
										</div>
										<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
											<BsFillPersonLinesFill />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
						<div className="p-4">
							<form>
								<div className="grid md:grid-cols-2 gap-4 w-full py-2">
									<div className="flex flex-col">
										<label
											className="uppercase text-sm py-2"
											htmlFor="">
											Name
										</label>
										<input
											className="border-2 rounded-lg p-3 flex border-gray"
											type="text"
										/>
									</div>
									<div className="flex flex-col">
										<label
											className="uppercase text-sm py-2"
											htmlFor="">
											Phone Number
										</label>
										<input
											className="border-2 rounded-lg p-3 flex border-gray"
											type="number"
										/>
									</div>
								</div>
								<div className="flex flex-col py-2">
									<label
										className="uppercase text-sm py-2"
										htmlFor="">
										Email
									</label>
									<input
										className="border-2 rounded-lg p-3 flex border-gray"
										type="email"
									/>
								</div>
								<div className="flex flex-col py-2">
									<label
										className="uppercase text-sm py-2"
										htmlFor="">
										Subject
									</label>
									<input
										className="border-2 rounded-lg p-3 flex border-gray"
										type="text"
									/>
								</div>
								<div className="flex flex-col py-2">
									<label
										className="uppercase text-sm py-2"
										htmlFor="">
										Message
									</label>
									<textarea
										className="border-2 rounded-lg p-3 flex border-gray"
										rows="6"
										type="text"
									/>
								</div>
								<button className="w-full p-4 text-gray-100 mt-2">
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className="flex justify-center pt-12">
					<Link href="/">
						<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
							<HiOutlineChevronDoubleUp className="text-[#2c5074]size={30}" />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contact;
