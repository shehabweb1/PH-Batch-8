import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
	return (
		<div className="font-poppins container mx-auto">
			<Outlet />
		</div>
	);
};

export default Root;