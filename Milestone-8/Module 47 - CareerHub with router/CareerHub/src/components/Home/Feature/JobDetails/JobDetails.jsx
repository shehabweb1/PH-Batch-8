import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../../../../utility/localStorage";

export const JobDetails = () => {
	const jobs = useLoaderData();
	const { id } = useParams();
	const idNum = parseInt(id);
	const job = jobs.find((job) => job.id === idNum);

	const handleApplyJob = () => {
		saveJobApplication(idNum);
	};
	return (
		<>
			<h1 className="text-4xl font-bold text-center my-16">Job Details</h1>
			<div className="grid grid-cols-4 gap-6 mb-20">
				<div className="col-span-3">
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
				</div>
				<div className="mt-10">
					<h3 className="text-xl font-semibold text-center pb-5 border-b border-gray-400">
						Job Details
					</h3>
					<div className="my-10">
						<p className="text-lg font-semibold">
							Salary:{" "}
							<span className="font-normal text-gray-400">
								{job.salary} (Per Month)
							</span>
						</p>
						<p className="text-lg font-semibold">
							Job Title:{" "}
							<span className="font-normal text-gray-400">{job.job_title}</span>
						</p>
					</div>
					<h3 className="text-xl font-semibold text-center pb-5 border-b border-gray-400 ">
						Contact Information
					</h3>
					<div className="my-10">
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
					<button onClick={handleApplyJob} className="btn btn-primary w-full">
						Apply Now
					</button>
				</div>
			</div>
		</>
	);
};
