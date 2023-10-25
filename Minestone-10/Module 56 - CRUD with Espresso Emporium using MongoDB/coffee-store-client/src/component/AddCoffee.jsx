import Swal from "sweetalert2";

const AddCoffee = () => {
	const handleAddForm = (e) => {
		e.preventDefault();

		const form = e.target;

		const name = form.name.value;
		const quantity = form.quantity.value;
		const supplier = form.supplier.value;
		const taste = form.taste.value;
		const category = form.category.value;
		const details = form.details.value;

		const addNew = { name, quantity, supplier, taste, category, details };

		fetch(
			"https://coffee-store-server-g5dza864k-maves-projects.vercel.app/coffee",
			{
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(addNew),
			}
		)
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					Swal.fire("Good job!", "Coffee Added Successfully!", "success");
				}
			});
	};
	return (
		<>
			<div className="w-11/12 mx-auto">
				<h1 className="text-3xl font-bold text-center my-5">Add Coffee</h1>
				<form onSubmit={handleAddForm}>
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
								placeholder="Details"
							/>
						</div>
					</div>
					<button className="py-2 px-5 my-2 bg-blue-800 text-white rounded-md">
						Submit
					</button>
				</form>
			</div>
		</>
	);
};

export default AddCoffee;
