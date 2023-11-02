import React from "react";
import { redirect } from "react-router-dom";
import { auth } from "../services/firebase.config";
import { useAuth } from "../AuthContext";

const DashboardPage = () => {
	const { user } = useAuth();
	return (
		<>
			<h1>Dashboard Page</h1>
			<p>User: {user.email}</p>
		</>
	);
};

export default DashboardPage;
