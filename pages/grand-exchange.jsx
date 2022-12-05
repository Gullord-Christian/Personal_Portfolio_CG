import React from "react";
import GrandExchangeImg from "../public/static/projects/grand-exchange-2.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const grand = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[30vh] lg:h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={GrandExchangeImg}
					alt="/"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">Grand Exchange</h2>
					<h3>ReactJs | NextJs | Stripe | Sanity </h3>
				</div>
			</div>
			<div className="max-w-[1240] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
				<div className="col-span-4">
					<p>Project</p>
					<h2 className="pb-2">Overview</h2>
					<p>
						Engineered user interface with ReactJs and NextJs, users can
						find and purchase their favorite items. Integrated database
						with Sanity to store item details, descriptions and pictures.
						Users can purchaes items directly with Stripe, implemented
						back-end with Sanity for ease of use.
					</p>
					<br />
					<p className="font-semibold">Test Credentials for Stripe:</p>
					<p>Card number: 4242 4242 4242 4242</p>
					<p>CVV: 424</p>
					<Link
						target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/Gullord-Christian/Grand_Exchange">
						<button className="px-8 py-2 mt-4 mr-8">Code</button>
					</Link>
					<Link
						rel="noopener noreferrer"
						target="_blank"
						href="https://grand-exchange.vercel.app/">
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
								NextJs
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Tailwind CSS
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Stripe
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Sanity
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

export default grand;
