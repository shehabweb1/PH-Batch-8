import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./component/CoffeeCard";
import { useState } from "react";

function App() {
	const loadedCoffees = useLoaderData();
	const [coffees, setCoffees] = useState(loadedCoffees);
	return (
		<>
			<h1 className="text-3xl font-bold text-center mb-6">The Coffee Store</h1>
			{coffees.map((coffee) => (
				<CoffeeCard
					coffee={coffee}
					key={coffee._id}
					coffees={coffees}
					setCoffees={setCoffees}
				/>
			))}
		</>
	);
}

export default App;
