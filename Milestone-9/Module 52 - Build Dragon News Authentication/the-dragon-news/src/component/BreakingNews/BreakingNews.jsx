import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
	return (
		<div className="flex">
			<div className="py-2 px-5 text-white font-semibold bg-red-700">
				Latest
			</div>
			<Marquee pauseOnHover={true}>
				<Link to="/" className="mr-5">
					Match Highlights: Germany vs Spain — as it happened !
				</Link>
				<Link to="/" className="mr-5">
					Match Highlights: Germany vs Spain — as it happened !
				</Link>
				<Link to="/" className="mr-5">
					Match Highlights: Germany vs Spain — as it happened !
				</Link>
			</Marquee>
		</div>
	);
};

export default BreakingNews;
