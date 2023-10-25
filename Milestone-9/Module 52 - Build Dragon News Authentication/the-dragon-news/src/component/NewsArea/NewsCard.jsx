import React from "react";
import {
	BsShare,
	BsBookmark,
	BsFillEyeFill,
	BsFillStarFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
	const { _id, author, image_url, title, details, rating, total_view } = news;
	return (
		<>
			<div className="py-10">
				<div className="flex justify-between items-center">
					<div className="flex">
						<img
							src={author.img}
							alt={author.name}
							className="h-10 w-10 rounded-full"
						/>
						<div className="ml-3">
							<h4 className="text-lg font-semibold">{author.name}</h4>
							<p>{author.published_date}</p>
						</div>
					</div>
					<div className="flex gap-3 text-xl">
						<button>
							<BsShare />
						</button>
						<button>
							<BsBookmark />
						</button>
					</div>
				</div>
				<h1 className="text-2xl font-bold my-8">{title}</h1>
				<img src={image_url} alt={title} />
				<div className="my-8">
					{details.length > 200 ? (
						<>
							<p>{details.slice(0, 200)}</p>
							<Link
								to={`/news/${_id}`}
								className="text-orange-400 font-semibold text-lg"
							>
								See more
							</Link>
						</>
					) : (
						<p>{details}</p>
					)}
				</div>
				<div className="flex justify-between items-center">
					<div className="flex gap-3 ">
						<div className="flex gap-2 text-yellow-600 text-xl">
							<BsFillStarFill />
							<BsFillStarFill />
							<BsFillStarFill />
							<BsFillStarFill />
							<BsFillStarFill />
						</div>
						<p className="text-lg">{rating.number}</p>
					</div>
					<div className="flex gap-3 items-center">
						<div className="text-xl">
							<BsFillEyeFill />
						</div>
						<p className="text-lg">{total_view}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default NewsCard;
