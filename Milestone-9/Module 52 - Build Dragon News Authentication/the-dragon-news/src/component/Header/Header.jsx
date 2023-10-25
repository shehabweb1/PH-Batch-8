import React from "react";
import logo from "./../../assets/logo.png";
import moment from "moment/moment";

const Header = () => {
	const today = moment().format("dddd, MMMM D, YYYY");
	return (
		<div className="text-center py-5">
			<img src={logo} alt="Logo" className="mx-auto" />
			<p className="my-2">Journalism Without Fear or Favour</p>
			<h3 className="text-lg">{today}</h3>
		</div>
	);
};

export default Header;
