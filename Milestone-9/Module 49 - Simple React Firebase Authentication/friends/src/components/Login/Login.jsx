import React, { useState } from "react";
import app from "../../firebase.config";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
} from "firebase/auth";


export const Login = () => {
	const [user, setUser] = useState("");

	const provider = new GoogleAuthProvider();
	const auth = getAuth(app);

	const handleLoginWithGoogle = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				const user = result.user;
				setUser(user);
			})
			.catch((error) => {
				const errorMessage = error.message;
				console.log(errorMessage);
			});
	};

	const handleSignOutWithGoogle = () => {
		signOut(auth)
			.then(() => {
				setUser("");
			})
			.catch((error) => {
				console.log("An error happened: ", error);
			});
	};

	return (
		<>
			<div className="w-2/5 mx-auto">
				<h1 className="text-3xl text-center font-bold mb-4">
					{user ? "User" : "Login With Google"}
				</h1>
				{user ? (
					<button
						onClick={handleSignOutWithGoogle}
						className="block mx-auto btn"
					>
						Sign out
					</button>
				) : (
					<button onClick={handleLoginWithGoogle} className="block mx-auto btn">
						Login
					</button>
				)}
				{user && (
					<div className="my-5">
						<h3>Name: {user.displayName}</h3>
						<p>Email: {user.email}</p>
						<img src={user.photoURL} alt={user.displayName} />
					</div>
				)}
			</div>
		</>
	);
};
