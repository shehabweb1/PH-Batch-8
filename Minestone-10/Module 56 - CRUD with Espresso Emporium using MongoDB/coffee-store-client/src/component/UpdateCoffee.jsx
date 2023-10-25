import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
	const upCoffee = useLoaderData();
	const { _id, name, quantity, supplier, taste, category, details } = upCoffee;

	const handleUpdateForm = (e) => {
		e.preventDefault();

		const form = e.target;

		const name = form.name.value;
		const quantity = form.quantity.value;
		const supplier = form.supplier.value;
		const taste = form.taste.value;
		const category = form.category.value;
		const details = form.details.value;

		const update = { name, quantity, supplier, taste, category, details };

		fetch(
			`https://coffee-store-server-g5dza864k-maves-projects.vercel.app/coffee/${_id}`,
			{
				method: "PUT",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(update),
			}
		)
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					Swal.fire("Good job!", "Coffee Updated Successfully!", "success");
				}
			});
	};

	return (
		<div className="w-11/12 mx-auto">
			<h1 className="text-3xl font-bold text-center my-5">Update Coffee</h1>
			<form onSubmit={handleUpdateForm}>
				<div className="grid grid-cols-3 gap-3">
					<div className="flex flex-col">
						<label htmlFor="coffeeName" className="text-lg">
							Coffee Name
						</label>
						<input
							type="text"
							name="name"
							id="coffeeName"
							className="border border-black p-1 rounded-md"
							defaultValue={name}
							placeholder="Coffee Name"
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="quantity" className="text-lg">
							Available Quantity
						</label>
						<input
							type="text"
							name="quantity"
							id="quantity"
							className="border border-black p-1 rounded-md"
							defaultValue={quantity}
							placeholder="Available Quantity"
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="supplierName" className="text-lg">
							Supplier Name
						</label>
						<input
							type="text"
							name="supplier"
							id="supplierName"
							className="border border-black p-1 rounded-md"
							defaultValue={supplier}
							placeholder="Supplier Name"
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="taste" className="text-lg">
							Taste
						</label>
						<input
							type="text"
							name="taste"
							id="taste"
							className="border border-black p-1 rounded-md"
							defaultValue={taste}
							placeholder="Taste"
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="category" className="text-lg">
							Coffee Category
						</label>
						<input
							type="text"
							name="category"
							id="category"
							className="border border-black p-1 rounded-md"
							defaultValue={category}
							placeholder="Coffee Category"
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="details" className="text-lg">
							Details
						</label>
						<input
							type="text"
							name="details"
							id="details"
							className="border border-black p-1 rounded-md"
							defaultValue={details}
							placeholder="Details"
						/>
					</div>
				</div>
				<button className="py-2 px-5 my-2 bg-blue-800 text-white rounded-md">
					Submit
				</button>
			</form>
		</div>
	);
};

export default UpdateCoffee;
