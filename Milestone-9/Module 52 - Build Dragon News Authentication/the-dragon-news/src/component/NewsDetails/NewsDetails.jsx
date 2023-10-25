import React from "react";
import Header from "../Header/Header";
import RightSide from "../RightSide/RightSide";
import NavBar from "../NavBar/NavBar";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const NewsDetails = () => {
	const theNews = useLoaderData();
	const param = useParams();

	const data = theNews.find((news) => news._id === param.id);

	const { image_url, title, details } = data;

	return (
		<div>
			<Header />
			<NavBar />
			<div className="grid grid-cols-4">
				<div className="col-span-3">
					<h2 className="text-2xl font-semibold">Dragon News</h2>
					<div className="my-10 mr-5">
						<img src={image_url} alt={title} className="w-full" />
						<h1 className="text-4xl font-bold my-7">{title}</h1>
						<p>{details}</p>
					</div>
					<Link to="/">
						<button className="flex items-center gap-2 bg-red-600 py-2 px-5 text-white text-xl">
							<BsArrowLeft /> All news in this category
						</button>
					</Link>
				</div>
				<div>
					<RightSide />
				</div>
			</div>
		</div>
	);
};

export default NewsDetails;
