import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AddCoffee from "./component/AddCoffee.jsx";
import UpdateCoffee from "./component/UpdateCoffee.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		loader: () =>
			fetch(
				"https://coffee-store-server-g5dza864k-maves-projects.vercel.app/coffee"
			),
	},
	{
		path: "/add-coffee",
		element: <AddCoffee></AddCoffee>,
	},
	{
		path: "/update-coffee/:id",
		element: <UpdateCoffee></UpdateCoffee>,
		loader: ({ params }) =>
			fetch(
				`https://coffee-store-server-g5dza864k-maves-projects.vercel.app/coffee/${params.id}`
			),
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
