import React, { useState, useEffect } from "react";
import {
	IoAddCircleOutline,
	IoAlert,
	IoTrashOutline,
	IoPencil,
} from "react-icons/io5";

function TodoList() {
	const [localTodos, setLocalTodos] = useState(localStorage.getItem('todos') || [])
	const [todos, setTodos] = useState([]);
	const [task, setTask] = useState("");
	const [editTask, setEditTask] = useState("");
	const [editIndex, setEditIndex] = useState(-1);

	useEffect(()=> {
		localStorage.setItem('todos', todos.toString())
		console.log(localStorage.getItem('todos'))
		console.log(localTodos)
	}, [todos])

	const handleAddTodo = () => {
		if (task.trim() !== "") {
			setTodos([...todos, { task, isImportant: false }]);
			setTask("");
		}
	};

	const handleEditTodo = (index) => {
		setEditTask(todos[index].task);
		setEditIndex(index);
	};

	const handleToggleImportance = (index) => {
		console.log("important ok", index);
		const updatedTodos = todos.map((todo, i) =>
			i === index ? { ...todo, isImportant: !todo.isImportant } : todo
		);
		console.log(updatedTodos);
		setTodos(updatedTodos);
	};

	const handleUpdateTodo = () => {
		if (editTask.trim() !== "") {
			const updatedTodos = todos.map((todo, index) =>
				index === editIndex ? { ...todo, task: editTask } : todo
			);
			setTodos(updatedTodos);
			setEditTask("");
			setEditIndex(-1);
		}
	};

	const handleDeleteTodo = (index) => {
		const updatedTodos = todos.filter((_, i) => i !== index);
		setTodos(updatedTodos);
	};

	return (
		<div>
			<h1>ToDo List</h1>
			<input
				type='text'
				value={task}
				onChange={(e) => setTask(e.target.value)}
				placeholder='Add a task...'
			/>
			<button onClick={handleAddTodo}>
				<IoAddCircleOutline />
			</button>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>
						{editIndex === index ? (
							<input
								type='text'
								value={editTask}
								onChange={(e) => setEditTask(e.target.value)}
							/>
						) : (
							<>
								{todo.isImportant ? (
									<strong>{todo.task}</strong>
								) : (
									todo.task
								)}
								<button
									style={styles.button}
									onClick={() =>
										handleToggleImportance(index)
									}>
									<IoAlert />
								</button>
								<button
									style={styles.button}
									onClick={() => handleEditTodo(index)}>
									<IoPencil />
								</button>
								<button
									style={styles.button}
									onClick={() => handleDeleteTodo(index)}>
									<IoTrashOutline />
								</button>
							</>
						)}
						{editIndex === index && (
							<button onClick={handleUpdateTodo}>Save</button>
						)}
					</li>
				))}
			</ul>
		</div>
	);
}

const styles = {
	button: {
		padding: 5,
		margin: 5,
		backgroundColor: "pink",
	},
};

export default TodoList;
