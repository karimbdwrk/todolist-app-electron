import React from "react";
import { collection } from "@firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../services/firebase.config";

import ChildrenList from "../components/ChildrenList";
import AddNew from "../components/AddNew";

const TodoLists = () => {
	const query = collection(db, "todolist");

	const [docs, loading, error] = useCollectionData(query);
	console.log(docs);

	return (
		<>
			<h3>Liste des todolists</h3>
			{loading && "loading ..."}

			<ul>
				{docs?.map((doc) => (
					<div key={Math.random()}>
						<li>{doc.name}</li>
						<ChildrenList path={`todolist/${doc.name}/todos`} />
					</div>
				))}
				<AddNew path='todolist' />
			</ul>
		</>
	);
};

export default TodoLists;
