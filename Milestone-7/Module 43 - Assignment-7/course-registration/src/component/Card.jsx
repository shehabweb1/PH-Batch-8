import React from "react";

export const Card = ({ course, handleCourse }) => {
	const { id, image, title, description, price, credit } = course;
	return (
		<>
			<div className="p-2 flex flex-col justify-between">
				<img src={image} alt={title} />
				<div className="py-2">
					<h3 className="text-lg font-bold">{title}</h3>
					<p className="text-sm text-slate-500 py-3 leading-5">{description}</p>
					<div className="flex justify-between my-3">
						<div className="flex">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12 1V23"
									stroke="#1C1B1B"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
									stroke="#1C1B1B"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<p className="text-lg text-slate-600 ml-2">Price: {price}</p>
						</div>
						<div className="flex">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12 6.042C10.3516 4.56336 8.2144 3.74694 6 3.75C4.948 3.75 3.938 3.93 3 4.262V18.512C3.96362 18.172 4.97816 17.9989 6 18C8.305 18 10.408 18.867 12 20.292M12 6.042C13.6483 4.56328 15.7856 3.74685 18 3.75C19.052 3.75 20.062 3.93 21 4.262V18.512C20.0364 18.172 19.0218 17.9989 18 18C15.7856 17.9969 13.6484 18.8134 12 20.292M12 6.042V20.292"
									stroke="#1C1B1B"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<p className="text-lg text-slate-600 ml-2">
								Credit: {credit} hrs
							</p>
						</div>
					</div>
				</div>
				<button
					onClick={() => handleCourse(id, title, price, credit)}
					className="bg-blue-500 hover:bg-blue-600 py-2 block w-full text-white font-semibold rounded-lg"
				>
					Select
				</button>
			</div>
		</>
	);
};
