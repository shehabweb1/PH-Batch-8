import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationItem } from "../../utility/localStorage";
import DonationCard from "../DonationCard/DonationCard";

const Donation = () => {
	const data = useLoaderData();
	const [donated, setDonated] = useState([]);
	const [cards, setCards] = useState(4);

	useEffect(() => {
		const donationId = getStoredDonationItem();

		if (data.length) {
			const hasBeenDonated = data.filter((donation) =>
				donationId.includes(donation.id)
			);
			setDonated(hasBeenDonated);
		}
	}, []);

	return (
		<>
			<div className="my-10 grid lg:grid-cols-2 gap-6">
				{donated.slice(0, cards).map((donatedData) => (
					<DonationCard donatedData={donatedData} key={donatedData.id} />
				))}
			</div>

			<button
				onClick={() => setCards(donated.length)}
				className={`btn ${
					cards === donated.length || donated.length < 4 ? "hidden" : "block"
				} mx-auto my-5 bg-[#009444] hover:bg-[#009445c9] text-white normal-case`}
			>
				See All
			</button>
		</>
	);
};

export default Donation;
