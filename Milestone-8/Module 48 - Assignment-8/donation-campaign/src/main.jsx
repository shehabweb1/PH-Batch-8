import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Donation from "./components/Donation/Donation";
import Statistics from "./components/Statistics/Statistics";
import DetailsPage from "./components/DetailsPage/DetailsPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				loader: async () => fetch("/../data.json"),
				element: <Home />,
			},
			{
				path: "/donation",
				loader: async () => fetch("/../data.json"),
				element: <Donation />,
			},
			{
				path: "/statistics",
				loader: async () => fetch("/../data.json"),
				element: <Statistics />,
			},
			{
				path: "/details/:id",
				loader: async () => fetch("/../data.json"),
				element: <DetailsPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
