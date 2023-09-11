import React from "react";

export const Card = ({ data }) => {
	const { title, author, urlToImage, description, publishedAt, url } = data;
	return (
		<>
			{urlToImage == null && urlToImage == undefined ? (
				""
			) : (
				<div className="card">
					<img src={urlToImage} alt="Image Not Found" />
					<div className="card-body">
						<a href={url} className="card-title" target="_blank">
							{title}
						</a>
						<div className="auth">
							<h4>{author.length < 30 ? author : "John Week"}</h4>
							<h4>{publishedAt.slice(0, 10)}</h4>
						</div>
						<p>{description}</p>
					</div>
				</div>
			)}
		</>
	);
};
