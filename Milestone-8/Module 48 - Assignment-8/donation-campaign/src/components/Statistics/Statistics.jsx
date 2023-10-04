import React from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationItem } from "../../utility/localStorage";
import Chart from "react-google-charts";

const Statistics = () => {
	const data = useLoaderData();
	const donation = getStoredDonationItem();
	const data1 = data.length - donation.length;
	const data2 = donation.length;

	const options = {
		title: "Donation Statistics",
		colors: ["#FF444A", "#00C49F"],
	};

	const pieChartData = [
		["Donation", "Donation Statistics in Items"],
		["Total Donation", data1],
		["Your Donation", data2],
	];

	return (
		<div>
			<Chart
				chartType="PieChart"
				data={pieChartData}
				options={options}
				width={"100%"}
				height={"400px"}
			/>
		</div>
	);
};

export default Statistics;
