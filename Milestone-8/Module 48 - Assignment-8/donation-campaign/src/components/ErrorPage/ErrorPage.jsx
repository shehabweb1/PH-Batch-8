import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<>
			<div className="flex justify-center items-center flex-col py-40">
				<h1 className="text-4xl font-bold mb-5">This page is not found</h1>
				<Link className="btn btn-primary" to="/">
					Go Back
				</Link>
			</div>
		</>
	);
};

export default ErrorPage;
