import React from "react";
import { redirect, Route } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { user } = useAuth();

	return (
		<Route
			{...rest}
			render={(props) =>
				user ? <Component {...props} /> : redirect("/signin")
			}
		/>
	);
};

export default PrivateRoute;
