import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

const Contact = () => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmitForm = async (values) => {
		let config = {
			method: "post",
			url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
			headers: {
				"Content-Type": "application/json",
			},
			data: values,
		};

		try {
			const response = await axios(config);
			if (response.status == 200) {
				reset();
				toast.success(
					"Your message has been sent! \n Thank you for contacting me, I will reach out as soon as I can!",
					{
						position: "bottom-center",
					}
				);
			}
		} catch (err) {
			console.error(err);
			toast.error(
				"Uh oh! Something went wrong. Please try to send your message again"
			);
		}
	};

	return (
		<div id="contact" className="w-full lg:h-screen">
			<div className="max-w-[1240px] m-auto px-2 py-16 w-full">
				<p className="text-xl tracking-widest uppercase ml-2 text-[#008B8B]">
					Contact
				</p>
				<h2 className="py-4">Get In Touch</h2>
				<div className="grid md:grid-cols-5 gap-6">
					<div className="col-span-3 md:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 ">
						<div className="lg:p-4 h-full">
							<div className="flex">
								<img
									className="rounded-xl hover:scale-105 ease-in duration-300 md:w-[75%] md:h-[75%] md:mx-auto lg:h-full lg:w-full h-[85%] w-[85%] mx-auto "
									src={
										"/static/images/profile_pic_personal_portfolio_2.png"
									}
									alt="contact"
								/>
							</div>
							<div>
								<h2 className="py-4 sm:text-3xl text-xl">
									Christian Gullord
								</h2>
								<p>
									<span className="font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#778899] to-[#2c5074]">
										Software Developer
									</span>
								</p>
								<p className="py-4">
									In my current role, I am working as a
									full-stack developer. Our stack includes
									PHP, Laravel, React.js and SQL.
								</p>
							</div>
							<div>
								<p className="uppercase pt-8 pb-4 text-center text-[#2c5074] font-semibold text-base">
									Connect with me
								</p>
								<div>
									<div className="flex items-center justify-between max-w-[330px] m-auto py-4">
										<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 hover:text-[#2c5074]">
											<Link
												target="_blank"
												href="https://www.linkedin.com/in/christiangullord/">
												<FaLinkedinIn />
											</Link>
										</div>
										<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 hover:text-[#2c5074]">
											<Link
												target="_blank"
												href="https://github.com/Gullord-Christian">
												<FaGithub />
											</Link>
										</div>
										<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 hover:text-[#2c5074]">
											<Link
												target="_blank"
												href="mailto:gullord.christian@gmail.com">
												<AiOutlineMail />
											</Link>
										</div>
										<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 hover:text-[#2c5074]">
											<BsFillPersonLinesFill />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
						<div className="p-4">
							<form onSubmit={handleSubmit(onSubmitForm)}>
								<div className="grid md:grid-cols-2 gap-4 w-full py-2">
									<div className="flex flex-col">
										<label
											className="uppercase text-sm py-2"
											htmlFor="name"
											id="name">
											Name
										</label>
										<input
											className={`border-2 rounded-lg p-3 flex border-gray ${
												errors.name
													? "ring-2 ring-red-500"
													: null
											}`}
											type="text"
											name="name"
											{...register("name", {
												required: {
													value: true,
													message:
														"Please enter your name",
												},
											})}
										/>
										<span className="text-red-400 text-[15px] py-2">
											{errors?.name?.message}
										</span>
									</div>
									<div className="flex flex-col">
										<label
											className="uppercase text-sm py-2"
											htmlFor="phone"
											id="phoneNumber">
											Phone Number{" "}
											<span className="text-gray-400">
												(Optional)
											</span>
										</label>
										<input
											className="border-2 rounded-lg p-3 flex border-gray"
											type="tel"
											name="phoneNumber"
											{...register("phoneNumber", {
												required: false,
											})}
										/>
									</div>
								</div>
								<div className="flex flex-col py-2">
									<label
										className="uppercase text-sm py-2"
										htmlFor="email"
										id="email">
										Email
									</label>
									<input
										className={`border-2 rounded-lg p-3 flex border-gray ${
											errors.name
												? "ring-2 ring-red-500"
												: null
										}`}
										type="text"
										name="email"
										{...register("email", {
											required: {
												value: true,
												message:
													"Please enter your email",
											},
											pattern: {
												value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
												message:
													"Please enter valid email address",
											},
										})}
									/>
									<span className="text-red-400 text-[15px] py-2">
										{errors?.email?.message}
									</span>
								</div>
								<div className="flex flex-col py-2">
									<label
										className="uppercase text-sm py-2"
										htmlFor="subject"
										id="subject">
										Subject{" "}
										<span className="text-gray-400">
											(Optional)
										</span>
									</label>
									<input
										className="border-2 rounded-lg p-3 flex border-gray"
										type="text"
										name="subject"
										{...register("subject", {
											required: false,
										})}
									/>
								</div>
								<div className="flex flex-col py-2">
									<label
										className="uppercase text-sm py-2"
										htmlFor="message"
										id="message">
										Message
									</label>
									<textarea
										className={`border-2 rounded-lg p-3 flex border-gray ${
											errors.name
												? "ring-2 ring-red-500"
												: null
										}`}
										rows="6"
										type="text"
										name="message"
										{...register("message", {
											required: {
												value: true,
												message:
													"Please enter your message",
											},
											maxLength: {
												value: 1000,
												message:
													"Your message is too long",
											},
											minLength: {
												value: 5,
												message:
													"Your message needs to be at least 5 characters",
											},
										})}
									/>
									<span className="text-red-400 text-[15px] py-2">
										{errors?.message?.message}
									</span>
								</div>
								<button className="w-full p-4 text-gray-100 mt-10 hover:ring-2">
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className="flex justify-center pt-12">
					<Link href="/">
						<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
							<HiOutlineChevronDoubleUp className="text-[#2c5074] size={30} hover:text-[#2c5074]" />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contact;
