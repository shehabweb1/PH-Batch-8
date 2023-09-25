import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
	return (
		<>
			<div className="flex flex-col justify-center items-center">
				<h1 className="text-3xl font-bold mt-20 mb-5 uppercase">
					This page is not found
				</h1>
				<Link to="/" className="btn text-xl font-semibold">
					Go Back Home
				</Link>
			</div>
		</>
	);
};
