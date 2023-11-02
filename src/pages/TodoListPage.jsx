import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

import Todo from "../components/Todo";

const TodoListPage = () => {
	const { user } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) {
			navigate("/signin");
		}
	}, []);

	return (
		<>
			<h1>TodoList Page</h1>
			<Todo />
		</>
	);
};

export default TodoListPage;
