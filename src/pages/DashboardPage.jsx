import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebase.config";
import { signOut } from "firebase/auth";
import { useAuth } from "../AuthContext";

const DashboardPage = () => {
	const { user } = useAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				navigate("/");
				console.log("Signed out successfully");
			})
			.catch((error) => {
				// An error happened.
			});
	};

	useEffect(() => {
		if (!user) {
			navigate("/signin");
		}
	}, []);

	return (
		<>
			<h1>Dashboard Page</h1>
			<p>User: {user?.email}</p>
			<button onClick={handleLogout}>Logout</button>
		</>
	);
};

export default DashboardPage;
