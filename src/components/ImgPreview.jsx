import React, { useState } from "react";

const electron = window.require("electron");
const { shell } = electron;

const ImgPreview = () => {
	const [imagePath, setImagePath] = useState("");

	const downloadPath = app.getPath("downloads");

	const openFinder = () => {
		shell.openItem(downloadPath); // Remplacez par le chemin du dossier que vous souhaitez ouvrir
	};

	// const openFinder = () => {
	// 	const path = "/downloads"; // Remplacez par le chemin du dossier que vous souhaitez ouvrir
	// 	shell.openItem(path);
	// 	setImagePath(`${path}`); // Remplacez par le nom de votre image
	// };

	return (
		<>
			<h1>IMG PREVIEW</h1>
			<button onClick={openFinder}>Choisir une image</button>
		</>
	);
};

export default ImgPreview;
