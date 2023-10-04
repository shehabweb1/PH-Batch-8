import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { saveDonationItem } from "../../utility/localStorage";

const DetailsPage = () => {
	const data = useLoaderData();
	const { id } = useParams();
	const idInt = parseInt(id);
	const detailsItem = data.find((item) => item.id === idInt);

	const handleDonation = () => {
		Swal.fire("Thank You!", "Your donation has been successful!", "success");

		saveDonationItem(idInt);
	};

	return (
		<>
			<div className="relative">
				<img
					src={detailsItem.full_image}
					alt={detailsItem.title}
					className="w-full h-[700px] object-cover rounded-xl"
				/>
				<div className="w-full absolute bottom-0 left-0 py-5 bg-[#0b0b0b80] rounded-b-xl">
					<button
						className="px-5 py-3 text-white opacity-100 ml-10 rounded-md hover:opacity-80"
						style={{ backgroundColor: detailsItem.text_color }}
						onClick={handleDonation}
					>
						Donate ${detailsItem.amount}
					</button>
				</div>
			</div>
			<div className="my-20">
				<h1 className="text-4xl font-bold mb-5">{detailsItem.title}</h1>
				<p className="leading-8 text-justify">{detailsItem.description}</p>
			</div>
		</>
	);
};

export default DetailsPage;
