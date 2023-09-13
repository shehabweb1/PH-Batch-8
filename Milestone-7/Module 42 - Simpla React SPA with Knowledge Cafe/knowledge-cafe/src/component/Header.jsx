import React from "react";
import profile from "../assets/profile.png";

export const Header = () => {
	return (
		<div className="flex justify-between items-center py-2 max-w-screen-xl mx-auto">
			<h1 className="text-4xl font-extrabold cursor-pointer">Knowledge Cafe</h1>
			<img src={profile} alt="profile" className="cursor-pointer" />
		</div>
	);
};
