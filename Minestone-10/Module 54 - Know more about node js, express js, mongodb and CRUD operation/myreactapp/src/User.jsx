import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const User = () => {
	const loadedUsers = useLoaderData();
	const [users, setUsers] = useState(loadedUsers);

	const style = {
		border: "1px solid black",
		margin: "10px 0",
		padding: "5px",
	};

	const handleDeleteUser = (_id) => {
		fetch(`http://localhost:5000/users/${_id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.deletedCount > 0) {
					alert("deleted successfully");
					const remaining = users.filter((user) => user._id !== _id);
					setUsers(remaining);
				}
			});
	};
	return (
		<div>
			<h1>Users: {users.length}</h1>
			{users.map((user) => (
				<div style={style} key={user._id}>
					<h3>User Details</h3>
					<p>Name: {user.name}</p>
					<p>Email: {user.email}</p>
					<button onClick={() => handleDeleteUser(user._id)}>Delete</button>
				</div>
			))}
		</div>
	);
};

export default User;
