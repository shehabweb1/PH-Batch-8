import React, { useEffect, useState } from "react";
import "./App.css";
import { Bookmarks } from "./component/Bookmarks";
import { Container } from "./component/Container";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const [clickedTitle, setClickedTitle] = useState([]);
	const [clickedPrice, setClickedPrice] = useState([]);
	const [clickedCredit, setClickedCredit] = useState([]);
	const [uniques, setUniques] = useState([]);
	const [remainingCredit, setRemainingCredit] = useState(20);

	const handleCourse = (id, title, price, credit) => {
		const currentId = [...uniques, id];
		if (uniques.includes(id)) {
			return toast.error("Already Existed", {
				position: "top-center",
				autoClose: 3000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: false,
				progress: undefined,
				theme: "colored",
			});
		}
		setUniques(currentId);

		const newTotalCredit = totalCredit + credit;

		if (newTotalCredit > 20 || remainingCredit < 0) {
			return toast.error("Don't have enough credit", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: false,
				progress: undefined,
				theme: "colored",
			});
		}

		setRemainingCredit(20 - newTotalCredit);
		setClickedTitle([...clickedTitle, title]);
		setClickedPrice([...clickedPrice, price]);
		setClickedCredit([...clickedCredit, credit]);
	};

	let totalPrice = 0;
	for (let price of clickedPrice) {
		totalPrice += price;
	}

	let totalCredit = 0;
	for (let credit of clickedCredit) {
		totalCredit += credit;
	}

	return (
		<>
			<ToastContainer />
			<div className="container mx-auto">
				<h1 className="text-4xl text-center font-bold py-5">
					Course Registration
				</h1>
				<div className="my-10 flex lg:flex-row lg:justify-between flex-col-reverse ">
					<div className="lg:w-3/4">
						<Container handleCourse={handleCourse} />
					</div>
					<div className="lg:w-1/4">
						<Bookmarks
							clickedTitle={clickedTitle}
							totalPrice={totalPrice}
							totalCredit={totalCredit}
							remainingCredit={remainingCredit}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
