import React from "react";
import {
	FaFacebookF,
	FaGithub,
	FaGoogle,
	FaInstagram,
	FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";
import bg from "../../assets/bg.png";

const RightSide = () => {
	return (
		<>
			<div className="mx-3">
				<div className="mb-10">
					<h3 className="text-xl font-bold">Login With</h3>
					<Link
						to="/"
						className="flex text-base cursor-pointer rounded-xl justify-center border hover:border-blue-500  mt-5 p-2 items-center"
					>
						<FaGoogle className="text-blue-500"></FaGoogle>
						<span className="ml-2">Login with Google</span>
					</Link>
					<Link
						to="/"
						className="flex text-base cursor-pointer rounded-xl justify-center border hover:border-black mt-5 p-2 items-center"
					>
						<FaGithub className="text-black"></FaGithub>
						<span className="ml-2">Login with Github</span>
					</Link>
				</div>
				<div className="my-5">
					<h3 className="text-xl font-bold">Find Us On</h3>
					<Link
						to="/"
						className="flex text-base cursor-pointer mt-5 ml-5 items-center"
					>
						<FaFacebookF className="text-blue-600"></FaFacebookF>
						<span className="ml-2">Facebook</span>
					</Link>
					<Link
						to="/"
						className="flex text-base cursor-pointer my-3 ml-5 items-center"
					>
						<FaTwitter className="text-blue-500"></FaTwitter>
						<span className="ml-2">Twitter</span>
					</Link>
					<Link
						to="/"
						className="flex text-base cursor-pointer ml-5 items-center"
					>
						<FaInstagram className="text-red-500"></FaInstagram>
						<span className="ml-2">Instagram</span>
					</Link>
				</div>
				<div className="my-10">
					<h3 className="text-xl font-bold">Q-Zone</h3>
					<div className="my-5 mx-3">
						<img src={qZone1} alt="Q-Zone" />
					</div>
					<div className="my-5 mx-3">
						<img src={qZone2} alt="Q-Zone" />
					</div>
					<div className="my-5 mx-3">
						<img src={qZone3} alt="Q-Zone" />
					</div>
				</div>
			</div>
			<div className="relative">
				<img src={bg} alt="" className="bg-cover bg-center w-full h-auto" />
				<div className="absolute top-44 mx-2 text-center">
					<h4 className="text-4xl font-semibold">
						Create an Amazing Newspaper
					</h4>
					<p className="my-5">
						Discover thousands of options, easy to customize layouts, one-click
						to import demo and much more.
					</p>
					<button className="btn bg-red-500 hover:bg-red-600 text-white">
						Learn More
					</button>
				</div>
			</div>
		</>
	);
};

export default RightSide;
