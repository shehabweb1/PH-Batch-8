import React, { useEffect, useState } from "react";
import { Book } from "./Book";
import { addToLS, getStoredCart } from "../utilities/localStorage";

export const Books = () => {
	const [books, setBooks] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetch("books.json")
			.then((res) => res.json())
			.then((data) => setBooks(data.items));
	}, []);

	useEffect(() => {
		if (books.length > 0) {
			const storedCart = getStoredCart();

			const saveCart = [];
			for (const id of storedCart) {
				const book = books.find((book) => book.id === id);
				if (book) {
					saveCart.push(book);
				}
			}
            setCart(saveCart);
		}
	}, [books]);

	const handleAddToCart = (book) => {
		const newCart = [...cart, book];
		setCart(newCart);
		addToLS(book.id);
	};

	return (
		<>
			<h3>Cart: {cart.length}</h3>
			<div className="books-container">
				{books.map((book) => (
					<Book book={book} key={book.id} handleAddToCart={handleAddToCart} />
				))}
			</div>
		</>
	);
};
