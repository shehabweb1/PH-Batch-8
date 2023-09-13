import React from "react";
import { FiBookmark } from "react-icons/fi";

export const Blog = ({ blog, handleBookmarks, handleSpendTime }) => {
	const { id, title, blogImg, author, authorImg, postdate, readTime, tags } = blog;
	return (
		<>
			<div className="flex flex-col mb-16 hover:shadow-xl">
				<img src={blogImg} alt={title} className="w-full" />
				<div className="py-10">
					<div className="flex justify-between">
						<div className="flex">
							<img src={authorImg} alt={author} className="w-16" />
							<div className="ml-2">
								<h4 className="text-2xl font-bold">{author}</h4>
								<p className="text-lg text-gray-600">{postdate}</p>
							</div>
						</div>
						<div className="flex items-center">
							<p className="text-lg text-gray-600 mr-2">{readTime} min read</p>
							<button
								onClick={() => handleBookmarks(blog)}
								className="text-2xl active:text-red-700"
							>
								<FiBookmark />
							</button>
						</div>
					</div>
					<h2 className="text-4xl font-bold my-7 cursor-pointer hover:text-sky-600 transition-all">
						{title}
					</h2>

					<div className="flex gap-2 my-5">
						{tags.map((tag, idx) => (
							<span className="text-lg text-gray-600" key={idx}>
								#{tag}
							</span>
						))}
					</div>
					<button
						onClick={() => handleSpendTime(id, readTime)}
						className="text-xl font-semibold underline text-purple-600"
					>
						Mark as read
					</button>
				</div>
			</div>
		</>
	);
};
