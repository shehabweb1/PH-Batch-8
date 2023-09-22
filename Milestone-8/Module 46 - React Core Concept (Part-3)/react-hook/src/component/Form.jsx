import React, { useContext, useRef } from "react";
import { FormDetails } from "../App";

export const Form = ({ children, handleSubmit }) => {
	const btn = useContext(FormDetails);

	const handleLocalSubmit = (e) => {
		e.preventDefault();
		const data = {
			name: e.target.name.value,
			email: e.target.email.value,
			password: e.target.password.value,
		};
		handleSubmit(data);
	};

	return (
		<>
			<div>
				{children}
				<form onSubmit={handleLocalSubmit} className="flex flex-col gap-5">
					<input type="text" name="name" />
					<input type="email" name="email" />
					<input type="password" name="password" />
					<button type="submit">{btn}</button>
				</form>
			</div>
		</>
	);
};
