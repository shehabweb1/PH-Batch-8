import React from "react";

export const NewsCard = ({ news }) => {
	const { author, title, content, description, urlToImage, url } = news;
	return (
		<>
			<div className="w-5/6 mx-auto shadow-md shadow-neutral-500 rounded-xl  mb-10">
				<img
					src={urlToImage}
					alt={title}
					className="w-full rounded-t-xl h-[500px] object-cover"
				/>
				<div className="bg-neutral-600 p-5 rounded-b-xl ">
					<a
						href={url}
						className="text-3xl font-bold hover:text-blue-500 transition-all"
						target="_blank"
					>
						{title}
					</a>
					<p className="text-xl font-semibold cursor-pointer my-5">{author}</p>
					<span className="text-lg">{description}</span>
					<a
						href={url}
						target="_blank"
						className="text-lg text-blue-400 hover:text-blue-500"
					>
						read more
					</a>
				</div>
			</div>
		</>
	);
};
