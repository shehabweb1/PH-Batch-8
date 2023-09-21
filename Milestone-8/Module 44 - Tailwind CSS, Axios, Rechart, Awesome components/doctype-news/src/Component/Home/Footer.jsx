import React from "react";
import { FaRegCopyright } from "react-icons/fa";

export const Footer = () => {
	return (
		<>
			<footer className="mx-auto py-5 bg-zinc-800">
				<div className="container mx-auto">
					<div className="flex justify-center items-center gap-2 text-2xl text-white">
						<FaRegCopyright />
						<p>2023 Doctype Ltd.</p>
					</div>
				</div>
			</footer>
		</>
	);
};
