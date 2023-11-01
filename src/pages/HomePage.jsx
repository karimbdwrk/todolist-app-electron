import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../services/firebase.config";

const HomePage = () => {
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
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				const uid = user.uid;
				// ...
				console.log("uid", uid);
			} else {
				// User is signed out
				// ...
				console.log("user is logged out");
			}
		});
	}, []);

	return (
		<>
			<h1>Home Page</h1>
			<Link to='/signin'>Sign In</Link>
			<Link to='/signup'>Sign Up</Link>
			<button onClick={handleLogout}>Logout</button>
		</>
	);
};

export default HomePage;
