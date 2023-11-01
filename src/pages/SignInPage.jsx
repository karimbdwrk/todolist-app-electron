import React from "react";
import { Link } from "react-router-dom";

import SignInForm from "../components/SignInForm";

const SignInPage = () => {
	return (
		<>
			<h2>Sign In Page</h2>
			<SignInForm />
			<Link to='/'>Home</Link>
		</>
	);
};

export default SignInPage;
