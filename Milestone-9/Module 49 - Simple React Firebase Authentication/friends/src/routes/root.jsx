import React from "react";
import { Header } from "../components/Header/Header";
import { Outlet } from "react-router-dom";

export const Root = () => {
	return (
		<>
			<div className="container mx-auto">
				<Header />
				<Outlet />
			</div>
		</>
	);
};
