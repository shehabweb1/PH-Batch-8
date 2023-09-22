import React from "react";

export const Bookmarks = ({
	clickedTitle,
	totalPrice,
	totalCredit,
	remainingCredit
}) => {
	return (
		<>
			<div className="m-5">
				<h4 className="text-lg text-blue-600 font-semibold">
					Credit Hour Remaining {remainingCredit} hr
				</h4>
				<hr className="my-5" />
				<h3 className="text-xl font-bold">Course Name</h3>
				<div className="my-5">
					{clickedTitle.map((data, idx) => (
						<p className="text-slate-500 mb-2" key={idx}>
							{++idx} {data}
						</p>
					))}
				</div>
				<h5 className="text-lg font-semibold text-gray-600">
					Total Credit Hour : {totalCredit}
				</h5>
				<hr className="my-3" />
				<h4 className="text-lg font-bold text-gray-600">
					Total Price : {totalPrice} USD
				</h4>
			</div>
		</>
	);
};
