import React from "react";
import { Hero } from "./Hero/Hero";
import { Category } from "./Category/Category";
import { useLoaderData } from "react-router-dom";
import { Feature } from "./Feature/Feature";

export const Home = () => {
	const data = useLoaderData();

	return (
		<>
			<Hero />
			<Category />
			<Feature data={data} />
		</>
	);
};
