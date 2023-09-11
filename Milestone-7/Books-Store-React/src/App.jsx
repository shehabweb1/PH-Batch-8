import "./App.css";
import { Bookstore } from "./Bookstore";

function App() {
	const books = [
		{
			id: "01",
			title: "A Rapid Review of Comprehensive Neurology",
			image:
				"https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/A_Rapid_Review_Of_Comprehensive_Neurolog-Dr_Md_Rakan_Uz_Zaman-5b382-234767.jpg",
			price: "1100",
			author: "Dr. Md. Rakan Uz Zaman",
		},
		{
			id: "02",
			title: "Textbook of Pharmacognosy",
			image:
				"https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/NAMK_Basic_Pharmacology_Pathology_And_Mi-Md_Mithun_Dwari-cb9b6-234057.jpg",
			price: "300",
			author: "Abdul Ghani",
		},
		{
			id: "03",
			title: "National Guidelines of Bangladesh",
			image:
				"https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/LANCET__National_Guidelines_of_Banglades-Dr_Md_Tafijul_Islam-3a368-234766.jpg",
			price: "900",
			author: "Dr. Md. Tafijul Islam",
		},
		{
			id: "04",
			title: "Neuron Fundamentals of Nursing",
			image:
				"https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Neuron_Fundamentals_of_Nursing-Dr_Md_Tanvir_Islam-a3e52-225495.JPG",
			price: "700",
			author: "Dr. Md. Tanvir Islam",
		},
		{
			id: "05",
			title: "Fatema's Basic Pediatric Cardiology",
			image:
				"https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Fatema's_Basic_Pediatric_Cardiology-Prof._Nurun_Nahar_Fatema-88fd9-217464.jpg",
			price: "1325",
			author: "Prof. Nurun Nahar Fatema",
		},
		{
			id: "06",
			title: "Neuron Behavioral Science for Nursing Students",
			image:
				"https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Neuron_Behavioral_Science_for_Nursing_St-Dr_Md_Tanvir_Islam-41c3f-225492.jpg",
			price: "1100",
			author: "Dr. Md. Tanvir Islam",
		},
		{
			id: "07",
			title: "National Guidelines of Bangladesh",
			image:
				"https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/LANCET__National_Guidelines_of_Banglades-Dr_Md_Tafijul_Islam-3a368-234766.jpg",
			price: "900",
			author: "Dr. Md. Tafijul Islam",
		},
		{
			id: "08",
			title: "Neuron Fundamentals of Nursing",
			image:
				"https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Neuron_Fundamentals_of_Nursing-Dr_Md_Tanvir_Islam-a3e52-225495.JPG",
			price: "700",
			author: "Dr. Md. Tanvir Islam",
		},
	];
	// console.log(books);
	return (
		<>
			<h1 className="header">A Book Store</h1>
			<Bookstore books={books} />
		</>
	);
}

export default App;
