import React from "react";
import { Link } from "react-router-dom";

const HomeCards = ({ item }) => {
	const { id, title, category, thumbnail, category_bg, card_bg, text_color } =
		item;
	return (
		<Link to={`/details/${id}`}>
			<img src={thumbnail} alt={title} className="w-full" />
			<div className="p-3 rounded-lg" style={{ backgroundColor: card_bg }}>
				<span
					className="text-sm font-semibold px-2 py-1 rounded-md"
					style={{ backgroundColor: category_bg, color: text_color }}
				>
					{category}
				</span>
				<h3
					className="text-xl font-semibold mt-2"
					style={{ color: text_color }}
				>
					{title}
				</h3>
			</div>
		</Link>
	);
};

export default HomeCards;
