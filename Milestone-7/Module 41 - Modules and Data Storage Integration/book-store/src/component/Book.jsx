import React from "react";

export const Book = ({ book, handleAddToCart }) => {
	const { volumeInfo } = book;
	return (
		<div className="book">
			<h2>
				{volumeInfo.title} <br />
				<span>{volumeInfo?.subtitle} </span>
			</h2>
			<img src={volumeInfo.imageLinks.thumbnail} alt={volumeInfo.title} />
			<button onClick={() => handleAddToCart(book)}>Add to Cart</button>
		</div>
	);
};
