import React, { useEffect, useState } from "react";
import axios from "axios";

export const Category = () => {
	const [Category, setCategory] = useState([]);
	useEffect(() => {
		axios.get("categories.json").then(function (res) {
			setCategory(res.data);
		});
	}, []);
	return (
		<>
			<h1 className="text-4xl font-bold text-center mb-4">Job Category List</h1>
			<p className="text-center">
				Explore thousands of job opportunities with all the information you
				need. Its your future
			</p>
			<div className="grid grid-cols-4 gap-5 mt-16">
				{Category.map((cat) => (
					<div className="flex flex-col items-center gap-3" key={cat.id}>
						<img src={cat.logo} alt={cat.category_name} className="w-16" />
						<h3 className="text-2xl">{cat.category_name}</h3>
						<p className="text-lg">{cat.availability}</p>
					</div>
				))}
			</div>
		</>
	);
};
