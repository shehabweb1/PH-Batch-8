import React from "react";

export const Country = ({ country }) => {
	const { name, flags } = country;
	return (
		<>
			<h3>{name.common}</h3>
            <img src={flags.png} alt={name.common} width="100px"/>
		</>
	);
};
