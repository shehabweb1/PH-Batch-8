import React, { useState } from "react";
import Banner from "../Banner/Banner";
import HomeCards from "../HomeCards/HomeCards";
import { useLoaderData } from "react-router-dom";

const Home = () => {
	const data = useLoaderData();
	const [category, setCategory] = useState(data);

	const handleCategory = (category) => {
		const categoryItems = data.filter((item) => item.category === category);
		setCategory(categoryItems);
	};

	return (
		<div className="py-10">
			<Banner handleCategory={handleCategory} />

			<div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				{category.map((item) => (
					<HomeCards item={item} key={item.id} />
				))}
			</div>
		</div>
	);
};

export default Home;
