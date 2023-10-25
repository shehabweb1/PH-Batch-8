import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSide = () => {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		fetch("categories.json")
			.then((res) => res.json())
			.then((data) => setCategories(data));
	}, []);

	return (
		<>
			<h3 className="text-xl font-bold">All Category</h3>
			<div className="py-3">
				{categories.map((category) => (
					<Link
						to={`/categories/${category.id}`}
						key={category.id}
						className="block font-semibold py-2 px-5 rounded-lg hover:bg-slate-500"
					>
						{category.name}
					</Link>
				))}
			</div>
            
		</>
	);
};

export default LeftSide;
