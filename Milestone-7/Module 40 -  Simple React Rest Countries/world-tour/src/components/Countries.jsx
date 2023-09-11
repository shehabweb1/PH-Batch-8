import React, { useEffect, useState } from "react";
import { Country } from "./country";

export const Countries = () => {
	const [countries, setCountries] = useState([]);
	useEffect(() => {
		fetch("https://restcountries.com/v3.1/all")
			.then((res) => res.json())
			.then((data) => setCountries(data));
	}, []);

	console.log(countries[0]);

	return (
		<>
			{countries.map((country) => (
				<Country country={country} key={country.cca3} />
			))}
		</>
	);
};
