import React from "react";

const Banner = ({ handleCategory }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const data = e.target.category.value;
		handleCategory(data);
	};

	return (
		<div
			className="bg-[url('https://i.ibb.co/Fw9vVqy/banner.jpg')] 
        w-full h-[600px] py-52  bg-cover bg-center -mt-40 bg-blend-overlay bg-white"
		>
			<h1 className="text-4xl font-bold text-center">
				I Grow By Helping People In Need
			</h1>
			<form
				onSubmit={handleSubmit}
				className="flex justify-center mt-10 text-lg"
			>
				<input
					type="text"
					name="category"
					placeholder="Search here...."
					className="lg:w-1/5 outline-none px-3 py-3 border rounded-s-md"
				/>
				<button
					type="submit"
					className="px-5 py-3 bg-[#FF444A] -ml-2 border-none rounded-e-md text-white hover:bg-[#e24b48]"
				>
					Search
				</button>
			</form>
		</div>
	);
};

export default Banner;
