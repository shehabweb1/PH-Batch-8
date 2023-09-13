import React from "react";

export const Bookmark = ({ addBookmarks, spendTime }) => {
	return (
		<>
			<h3 className="text-xl font-bold text-purple-600 border border-purple-600 p-4 rounded-lg">
				Spent time on read : {spendTime} min
			</h3>
			<div className="m-7">
				<h3 className="text-xl font-bold">
					Bookmarked Blogs : {addBookmarks.length}
				</h3>
				{addBookmarks.map((blog, idx) => (
					<p className="text-lg m-4" key={idx}>
						{blog.title}
					</p>
				))}
			</div>
		</>
	);
};
