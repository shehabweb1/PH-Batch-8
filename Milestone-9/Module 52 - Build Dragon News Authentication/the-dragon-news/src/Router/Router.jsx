import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import NewsDetails from "../component/NewsDetails/NewsDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../component/ErrorPage/ErrorPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
				loader: () => fetch("/news.json"),
			},
			{
				path: "/news/:id",
				element: (
					<PrivateRoute>
						<NewsDetails />
					</PrivateRoute>
				),
				loader: () => fetch("/news.json"),
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
		],
	},
]);

export default router;
