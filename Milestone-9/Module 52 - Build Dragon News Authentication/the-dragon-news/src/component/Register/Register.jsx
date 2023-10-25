import React from "react";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
	const { createUser } = useContext(AuthContext);

	const handleRegister = (e) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const name = form.get("name");
		const photo = form.get("photo");
		const email = form.get("email");
		const password = form.get("password");
		createUser(email, password)
			.then((result) => {
				console.log(result.user);
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	return (
		<>
			<NavBar />
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<h1 className="text-center text-3xl font-semibold mb-10">
					Register your account
				</h1>
				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" onSubmit={handleRegister}>
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium leading-6 "
							>
								Your Name
							</label>
							<div className="mt-2">
								<input
									id="name"
									name="name"
									type="text"
									autoComplete="name"
									className="block w-full rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									placeholder="Enter your name"
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor="photo"
								className="block text-sm font-medium leading-6 "
							>
								Your Photo URL
							</label>
							<div className="mt-2">
								<input
									id="photo"
									name="photo"
									type="text"
									autoComplete="photo"
									className="block w-full rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									placeholder="Enter your photo url"
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 "
							>
								Email address
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="block w-full rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									placeholder="Enter your email address"
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 "
								>
									Password
								</label>
							</div>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="block w-full rounded-md border-0 py-2 px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									placeholder="Enter your password"
								/>
							</div>
						</div>
						<div className="my-3 flex">
							<input type="checkbox" name="trams" id="trams" />
							<label htmlFor="trams" className="ml-2 text-sm">
								Accept Term & Conditions
							</label>
						</div>
						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-black px-3 py-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
							>
								Register
							</button>
						</div>
					</form>

					<p className="mt-10 text-center text-sm text-gray-500">
						Do you have an Account?{" "}
						<Link
							to="/login"
							className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
						>
							Login
						</Link>
					</p>
				</div>
			</div>
		</>
	);
};

export default Register;
