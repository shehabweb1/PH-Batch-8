import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";

export const AppliedJobs = () => {
	const jobs = useLoaderData();

	const [jobApplied, setJobApplied] = useState([]);

	useEffect(() => {
		const storedJobIds = getStoredJobApplication();
		if (jobs.length) {
			const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
			setJobApplied(jobsApplied);
		}
	}, []);
	return (
		<>
			<div className="my-16">
				<h1 className="text-xl font-semibold my-10">
					Applied Jobs: {jobApplied.length}
				</h1>
				{jobApplied.map((job) => (
					<div key={job.id} className="border my-10 p-5">
						<h3 className="text-2xl mb-3">
							Job Title: <span className="font-bold">{job.job_title}</span>
						</h3>

						<p className="text-lg font-semibold my-5">
							Job Description:{" "}
							<span className="font-light text-gray-400">
								{job.job_description}
							</span>
						</p>
						<p className="text-lg font-semibold my-5">
							Job Responsibility:{" "}
							<span className="font-light text-gray-400">
								{job.job_responsibility}
							</span>
						</p>

						<h3 className="text-lg font-semibold mt-5">
							Educational Requirements:
						</h3>
						<p className="text-lg font-light text-gray-400 my-2">
							{job.educational_requirements}
						</p>

						<h3 className="text-lg font-semibold mt-5">Experiences:</h3>
						<p className="text-lg font-light text-gray-400 my-2">
							{job.experiences}
						</p>
						<div className="my-10">
							<p className="text-lg font-semibold">
								Salary:{" "}
								<span className="font-normal text-gray-400">
									{job.salary} (Per Month)
								</span>
							</p>
							<div className="my-5">
								<p className="text-lg font-semibold">
									Phone:{" "}
									<span className="font-normal text-gray-400">
										{job.contact_information.phone}
									</span>
								</p>
								<p className="text-lg font-semibold">
									Email:{" "}
									<span className="font-normal text-gray-400">
										{job.contact_information.email}
									</span>
								</p>
								<p className="text-lg font-semibold">
									Address:{" "}
									<span className="font-normal text-gray-400">
										{job.contact_information.address}
									</span>
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};
