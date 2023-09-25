import React, { useState } from "react";
import { Job } from "./Job";

export const Feature = ({ data }) => {
	const [jobs, setJobs] = useState(4);

	const jobsData = data.slice(0, jobs);
	return (
		<>
			<div className="my-20">
				<h1 className="text-4xl font-bold text-center mb-4">Featured Jobs</h1>
				<p className="text-center">
					Explore thousands of job opportunities with all the information you
					need. Its your future
				</p>
				<div className="my-16 grid grid-cols-2 gap-4 mx-auto">
					{jobsData.map((job) => (
						<Job job={job} key={job.id} />
					))}
				</div>
				<div className={jobs === data.length ? "hidden" : ""}>
					<button
						onClick={() => setJobs(data.length)}
						className="btn btn-primary block mx-auto"
					>
						See More
					</button>
				</div>
			</div>
		</>
	);
};
