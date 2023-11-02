import React, { useRef, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../services/firebase.config";

const AddNew = ({ path }) => {
	const name = useRef();
	const [todo, setTodo] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		// API Call
		const docRef = doc(db, path, todo);
		await setDoc(docRef, { name: todo });

		setTodo("");
	};

	return (
		<li>
			<form onSubmit={handleSubmit}>
				<input value={todo} onChange={(e) => setTodo(e.target.value)} />
				<button type='submit'>Add</button>
			</form>
		</li>
	);
};

export default AddNew;
