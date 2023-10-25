import React from "react";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import LeftSide from "../LeftSide/LeftSide";
import RightSide from "../RightSide/RightSide";
import BreakingNews from "../BreakingNews/BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsArea/NewsCard";

const Home = () => {
	const theNews = useLoaderData();
	return (
		<>
			<Header />
			<BreakingNews />
			<NavBar />
			<div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
				<div>
					<LeftSide />
				</div>
				<div className="col-span-2">
					<h2 className="text-2xl font-semibold">Dragon News Home</h2>
					{theNews.map((news) => (
						<NewsCard key={news._id} news={news} />
					))}
				</div>
				<div>
					<RightSide />
				</div>
			</div>
		</>
	);
};

export default Home;
