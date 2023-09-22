import { createContext, useRef, useState } from "react";
import "./App.css";
import { Form } from "./component/Form";

export const FormDetails = createContext("");

function App() {
	const handleSignUpSubmit = (data) => {
		console.log(data);
	};
	const handleLoginSubmit = (data) => {
		console.log(data);
	};
	const handleUpdateSubmit = (data) => {
		console.log(data);
	};

	return (
		<>
			<div className="flex gap-10">
				<FormDetails.Provider value={"Sign Up"}>
					<Form handleSubmit={handleSignUpSubmit}>
						<h2 className="text-4xl font-bold mb-5">Sign Up Form</h2>
						<p className="text-lg mb-5">you can register here</p>
					</Form>
				</FormDetails.Provider>
				<FormDetails.Provider value={"Login"}>
					<Form handleSubmit={handleLoginSubmit}>
						<h2 className="text-4xl font-bold mb-5">Sign In Form</h2>
						<p className="text-lg mb-5">you can Login here</p>
					</Form>
				</FormDetails.Provider>
				<FormDetails.Provider value={"Update"}>
					<Form handleSubmit={handleUpdateSubmit}>
						<h2 className="text-4xl font-bold mb-5">Update Profile</h2>
						<p className="text-lg mb-5">you can update profile here</p>
					</Form>
				</FormDetails.Provider>
			</div>
		</>
	);
}

export default App;
