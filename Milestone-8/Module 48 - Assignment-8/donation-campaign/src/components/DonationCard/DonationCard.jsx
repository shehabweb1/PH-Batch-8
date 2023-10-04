import React from "react";
import { Link } from "react-router-dom";

const DonationCard = ({ donatedData }) => {
	const {
		id,
		full_image,
		category,
		title,
		amount,
		card_bg,
		category_bg,
		text_color,
	} = donatedData;
	return (
		<div className="flex rounded-lg" style={{ backgroundColor: card_bg }}>
			<figure>
				<img
					src={full_image}
					alt={title}
					className="w-60 h-52 object-cover rounded-s-lg"
				/>
			</figure>
			<div className="p-5">
				<span
					className="text-sm font-medium px-2 py-1 rounded-md w-20"
					style={{ backgroundColor: category_bg, color: text_color }}
				>
					{category}
				</span>
				<h2 className="my-2 text-2xl font-semibold">{title}</h2>
				<p className="text-lg font-semibold mb-5" style={{ color: text_color }}>
					${amount}
				</p>
				<Link
					to={`/details/${id}`}
					className="px-5 py-3 text-white rounded-lg font-semibold"
					style={{ backgroundColor: text_color }}
				>
					View Details
				</Link>
			</div>
		</div>
	);
};

export default DonationCard;
