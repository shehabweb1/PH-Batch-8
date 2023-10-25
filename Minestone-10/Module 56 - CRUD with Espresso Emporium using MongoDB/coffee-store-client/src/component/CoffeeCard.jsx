import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
	const { _id, name, quantity, supplier, taste, category, details } = coffee;
	const handleDelete = (_id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(
					`https://coffee-store-server-g5dza864k-maves-projects.vercel.app/coffee/${_id}`,
					{
						method: "DELETE",
					}
				)
					.then((res) => res.json())
					.then((data) => {
						if (data.deletedCount > 0) {
							Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
						}

						const remainingCoffee = coffees.filter((cof) => cof._id !== _id);

						setCoffees(remainingCoffee);
					});
			}
		});
	};
	return (
		<div className="p-5 border border-black m-5">
			<h3 className="text-xl">Coffee Name: {name}</h3>
			<p>Available Quantity: {quantity}</p>
			<p>Supplier Name: {supplier}</p>
			<p>Taste: {taste}</p>
			<p>Coffee Category: {category}</p>
			<p>Details: {details}</p>
			<button className="py-1 px-3 my-2 bg-gray-800 text-white mr-3">
				View
			</button>
			<Link to={`update-coffee/${_id}`}>
				<button className="py-1 px-3 my-2 bg-blue-800 text-white mr-3">
					Edit
				</button>
			</Link>
			<button
				onClick={() => handleDelete(_id)}
				className="py-1 px-3 my-2 bg-red-800 text-white"
			>
				Delete
			</button>
		</div>
	);
};

export default CoffeeCard;
