import React from "react";
import { Book } from "./Book";

export const Bookstore = ({ books }) => {
	return (
		<div className="container">
			<div className="cards">
				{books.map((book) => (
					<Book book={book} key={book.id} />
				))}
			</div>
			<button className="see-more">See More</button>
		</div>
	);
};
