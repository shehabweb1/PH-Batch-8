import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./components/Root/Root.jsx";
import { Home } from "./components/Home/Home.jsx";
import { ErrorPage } from "./components/ErrorPage/ErrorPage.jsx";
import { Statistics } from "./components/Statistics/Statistics.jsx";
import { AppliedJobs } from "./components/AppliedJobs/AppliedJobs.jsx";
import { Blog } from "./components/Blog/Blog.jsx";
import { JobDetails } from "./components/Home/Feature/JobDetails/JobDetails";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
				loader: () => fetch("/../jobs.json"),
			},
			{
				path: "/statistics",
				element: <Statistics />,
			},
			{
				path: "/applied",
				element: <AppliedJobs />,
				loader: () => fetch("/../jobs.json"),
			},
			{
				path: "/blog",
				element: <Blog />,
			},
			{
				path: "/job/:id",
				loader: () => fetch("/../jobs.json"),
				element: <JobDetails />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
