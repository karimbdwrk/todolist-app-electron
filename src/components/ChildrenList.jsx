import React from "react";
import { collection } from "@firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../services/firebase.config";

const ChildrenList = ({ path }) => {
	const query = collection(db, path);

	const [docs, loading, error] = useCollectionData(query);
	console.log(docs);

	return (
		<ul>
			{docs?.map((doc) => (
				<li key={Math.random()}>{doc.todo}</li>
			))}
		</ul>
	);
};

export default ChildrenList;
