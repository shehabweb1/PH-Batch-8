import React, { useEffect, useState } from "react";
import { Card } from "./Card";

export const News = () => {
	const [newsData, setNewsData] = useState([]);
	useEffect(() => {
		fetch(
			"https://newsapi.org/v2/everything?q=keyword&apiKey=e10f0a1dfa584a42968f9f37d5b0d5a9"
		)
			.then((res) => res.json())
			.then((data) => setNewsData(data.articles));
	}, []);

	const [cards, setCards] = useState(12);

	const newsDataSliced = newsData.slice(0, cards);

	const [displayNone, setDisplayNone] = useState("none");

	const isButtonShow = () => {
		displayNone === "none" ? setDisplayNone("block") : "none";
	};

	setTimeout(isButtonShow, 1000);
	return (
		<>
			<section>
				<div className="container">
					<div className="cards">
						{newsDataSliced.map((data) => (
							<Card data={data} key={data.publishedAt} />
						))}
					</div>
				</div>
			</section>
			<button
				className="see-more"
				onClick={() => setCards(cards + 12)}
				style={{ display: displayNone }}
			>
				Show More
			</button>
		</>
	);
};
