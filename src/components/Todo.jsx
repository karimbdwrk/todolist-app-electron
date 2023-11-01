import React, { useState, useEffect } from "react";
import {
	collection,
	addDoc,
	serverTimestamp,
	getDocs,
	doc,
	deleteDoc,
	runTransaction,
	orderBy,
	query,
} from "firebase/firestore";
import { db } from "../services/firebase.config";
const collectionRef = collection(db, "todo");

import EditTodo from "./EditTodo";

const Todo = () => {
	const [todos, setTodo] = useState([]);
	const [createTodo, setCreateTodo] = useState("");
	const [checked, setChecked] = useState([]);

	const submitTodo = async (e) => {
		e.preventDefault();

		try {
			await addDoc(collectionRef, {
				todo: createTodo,
				isChecked: false,
				timestamp: serverTimestamp(),
			});
			window.location.reload();
		} catch (err) {
			console.log(err);
		}
	};

	const deleteTodo = async (id) => {
		try {
			window.confirm("Are you sure you want to delete this Todo?");
			const documentRef = doc(db, "todo", id);
			await deleteDoc(documentRef);
			window.location.reload();
		} catch (err) {
			console.log(err);
		}
	};

	const checkHandler = async (event, todo) => {
		setChecked((state) => {
			const indexToUpdate = state.findIndex(
				(checkBox) => checkBox.id.toString() === event.target.name
			);
			let newState = state.slice();
			newState.splice(indexToUpdate, 1, {
				...state[indexToUpdate],
				isChecked: !state[indexToUpdate].isChecked,
			});
			setTodo(newState);
			return newState;
		});
		try {
			const docRef = doc(db, "todo", event.target.name);
			await runTransaction(db, async (transaction) => {
				const todoDoc = await transaction.get(docRef);
				if (!todoDoc.exists()) {
					throw "Document does not exist!";
				}
				const newValue = !todoDoc.data().isChecked;
				transaction.update(docRef, { isChecked: newValue });
			});
			console.log("Transaction successfully committed!");
		} catch (error) {
			console.log("Transaction failed: ", error);
		}
	};

	useEffect(() => {
		const q = query(collectionRef, orderBy("timestamp"));
		const getTodo = async () => {
			await getDocs(q)
				.then((todo) => {
					let todoData = todo.docs.map((doc) => ({
						...doc.data(),
						id: doc.id,
					}));
					setTodo(todoData);
					setChecked(todoData);
				})
				.catch((err) => {
					console.log(err);
				});
		};
		getTodo();
	}, []);

	return (
		<>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						<div className='card card-white'>
							<div className='card-body'>
								<button
									data-bs-toggle='modal'
									data-bs-target='#addModal'
									type='button'
									className='btn btn-info'>
									Add Todo
								</button>
								{todos.map(
									({ todo, id, isChecked, timestamp }) => (
										<div className='todo-list' key={id}>
											<div className='todo-item'>
												<hr />
												<span>
													<div className='checker'>
														<span
															className={`${
																isChecked ===
																true
																	? "done"
																	: ""
															}`}>
															<input
																type='checkbox'
																defaultChecked={
																	isChecked
																}
																name={id}
																onChange={(
																	event
																) =>
																	checkHandler(
																		event,
																		todo
																	)
																}
															/>
														</span>
													</div>
													&nbsp;{todo}
													<br />
													<i>
														{new Date(
															timestamp.seconds *
																1000
														).toLocaleString()}
													</i>
												</span>
												<span className=' float-end mx-3'>
													<EditTodo
														todo={todo}
														id={id}
													/>
												</span>
												<button
													onClick={() =>
														deleteTodo(id)
													}
													type='button'
													className='btn btn-danger float-end'>
													Delete
												</button>
											</div>
										</div>
									)
								)}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Modal */}
			<div
				className='modal fade'
				id='addModal'
				tabIndex='-1'
				aria-labelledby='addModalLabel'
				aria-hidden='true'>
				<div className='modal-dialog'>
					<form className='d-flex'>
						<div className='modal-content'>
							<div className='modal-header'>
								<h5 className='modal-title' id='addModalLabel'>
									Add Todo
								</h5>
								<button
									type='button'
									className='btn-close'
									data-bs-dismiss='modal'
									aria-label='Close'></button>
							</div>
							<div className='modal-body'>
								<input
									onChange={(e) =>
										setCreateTodo(e.target.value)
									}
									type='text'
									className='form-control'
								/>
							</div>
							<div className='modal-footer'>
								<button
									className='btn btn-secondary'
									data-bs-dismiss='modal'>
									Close
								</button>

								<button
									onClick={submitTodo}
									className='btn btn-primary'>
									Create Todo
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};
export default Todo;
