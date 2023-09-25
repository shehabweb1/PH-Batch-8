import React from "react";
import { Link } from "react-router-dom";

export const Job = ({ job }) => {
	const {
		id,
		logo,
		job_title,
		company_name,
		remote_or_onsite,
		job_type,
		location,
		salary,
	} = job;

	return (
		<>
			<div className="mb-10">
				<img src={logo} alt={job_title} className="w-44" />
				<h3 className="text-3xl font-semibold">{job_title}</h3>
				<p>{company_name}</p>
				<div className="flex my-5">
					<button className="px-5 py-2 border rounded-md border-purple-500 hover:border-white text-purple-500 hover:text-white mr-3">
						{remote_or_onsite}
					</button>
					<button className="px-5 py-2 border rounded-md border-purple-500 hover:border-white text-purple-500 hover:text-white">
						{job_type}
					</button>
				</div>
				<div className="flex mb-3">
					<p className="text-lg">{location}</p>
					<p className="text-lg">{salary}</p>
				</div>
				<Link to={`/job/${id}`} className="btn btn-primary">
					View Details
				</Link>
			</div>
		</>
	);
};
