import React from "react";

export const Header = () => {
	return (
		<>
			<header>
				<div className="container navBar">
					<h1 className="logo">
						DOCTYPE <small>News</small>
					</h1>
					<nav>
						<a href="#" className="active">
							Home
						</a>
						<a href="#">Latest News</a>
						<a href="#">Top News</a>
						<a href="#">About us</a>
						<a href="#">Contact</a>
					</nav>
				</div>
			</header>
		</>
	);
};
