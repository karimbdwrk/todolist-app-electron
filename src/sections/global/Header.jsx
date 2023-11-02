import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<Link to='/'>Home</Link>
			<Link to='/signin'>Sign In</Link>
			<Link to='/signup'>Sign Up</Link>
			<Link to='/todolist'>TodoList</Link>
			<Link to='/todolists'>TodoLists</Link>
			<Link to='/dashboard'>Dashboard</Link>
		</header>
	);
};

export default Header;
