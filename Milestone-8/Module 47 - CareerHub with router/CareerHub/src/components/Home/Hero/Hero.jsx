import React from "react";

export const Hero = () => {
	return (
		<>
			<div className="hero min-h-fit mb-20">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<img
						src="/images/user.png"
						className="max-w-lg rounded-lg shadow-2xl"
					/>
					<div>
						<h1 className="text-6xl font-bold">
							One Step Closer To Your{" "}
							<span className="text-purple-700">Dream Job</span>
						</h1>
						<p className="py-6">
							Explore thousands of job opportunities with all the information
							you need. Its your future. Come find it. Manage all your job
							application from start to finish.
						</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>
		</>
	);
};
