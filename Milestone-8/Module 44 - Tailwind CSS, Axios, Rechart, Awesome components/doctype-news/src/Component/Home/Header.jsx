import React, { useState } from "react";
import Hamburger from "hamburger-react";

export const Header = () => {
	const [isOpen, setOpen] = useState(false);

	return (
		<>
			<header className="py-5 bg-zinc-800 uppercase">
				<div className="container mx-auto flex md:justify-between items-center">
					<div className="block md:hidden mr-10 text-white">
						<Hamburger toggled={isOpen} toggle={setOpen} />
					</div>
					<h1 className="text-3xl text-red-600 font-bold cursor-pointer">
						Doctype<span className="text-base m-0">News</span>
					</h1>
					<nav className="hidden md:flex gap-5 text-lg lg:text-xl text-red-600 font-semibold">
						<a href="#" className="hover:text-red-700">
							Home
						</a>
						<a href="#" className="hover:text-red-700">
							Category
						</a>
						<a href="#" className="hover:text-red-700">
							Update News
						</a>
						<a href="#" className="hover:text-red-700">
							Contact Us
						</a>
					</nav>
					{isOpen && (
						<div className="flex md:hidden flex-col gap-5 text-xl font-semibold text-red-600 px-5 py-5 absolute bottom-0 top-20 left-0 bg-zinc-800">
							<a href="#" className="hover:text-red-700">
								Home
							</a>
							<a href="#" className="hover:text-red-700">
								Category
							</a>
							<a href="#" className="hover:text-red-700">
								Update News
							</a>
							<a href="#" className="hover:text-red-700">
								Contact Us
							</a>
						</div>
					)}
				</div>
			</header>
		</>
	);
};
