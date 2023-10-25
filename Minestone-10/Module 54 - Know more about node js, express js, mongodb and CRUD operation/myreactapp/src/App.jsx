import "./App.css";

function App() {
	const styles = {
		display: "flex",
		flexDirection: "column",
		gap: "10px",
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		const user = { name, email, password };

		console.log();

		fetch("http://localhost:5000/users", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {
				const acknowledged = data.acknowledged;
				if (acknowledged) {
					alert("User Send Successfully");
					form.reset();
				}
			});
	};

	return (
		<>
			<form onSubmit={handleFormSubmit} style={styles}>
				<input type="text" name="name" placeholder="Full Name" />
				<input type="email" name="email" placeholder="Email" />
				<input type="password" name="password" placeholder="Password" />
				<input type="submit" value="Submit" />
			</form>
		</>
	);
}

export default App;
