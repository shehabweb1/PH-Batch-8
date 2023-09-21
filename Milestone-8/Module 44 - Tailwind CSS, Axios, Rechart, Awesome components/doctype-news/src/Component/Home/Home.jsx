import React, { useEffect, useState } from "react";
import axios from "axios";
import { NewsCard } from "./NewsCard";

export const Home = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get(
				"https://newsapi.org/v2/everything?q=keyword&apiKey=e10f0a1dfa584a42968f9f37d5b0d5a9"
			)
			.then((res) => {
				const articlesData = res.data.articles;
				const newsArticles = articlesData.map((article) => {
					const obj = {
						publishedAt: article.publishedAt,
						author: article.author,
						title: article.title,
						content: article.content,
						description: article.description,
						urlToImage: article.urlToImage,
						url: article.url,
					};

					return obj;
				});
				setData(newsArticles);
			});
	}, []);

	// console.log(data[0]);
	return (
		<>
			<main className="py-16 bg-zinc-700 text-white">
				<div className="container mx-auto">
					{data.map((news) => (
						<NewsCard news={news} key={news.publishedAt} />
					))}
				</div>
			</main>
		</>
	);
};
