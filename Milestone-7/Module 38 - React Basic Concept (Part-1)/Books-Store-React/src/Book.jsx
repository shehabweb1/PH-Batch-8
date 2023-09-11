import React from "react";

export const Book = ({ book }) => {
	const { title, image, author, price } = book;
	return (
		<div className="card">
			<div className="card-img">
				<img src={image} alt={title} />
			</div>
			<div className="card-body">
				<h3>{title}</h3>
				<h4>{author}</h4>
				<p>Price: {price} TK</p>
				<button>Buy Now</button>
			</div>
		</div>
	);
};
