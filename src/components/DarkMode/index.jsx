import React, { useState } from "react";
import "./styles.css";

export const DarkMode = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const classBall = isDarkMode
		? "darkmode__ball darkmode__ball--left"
		: "darkmode__ball";

	const handleDarkmode = () => {
		setIsDarkMode(!isDarkMode);
		document.body.classList.toggle("dark_mode");
	};

	return (
		<div className="darkmode" onClick={handleDarkmode}>
			<i className="bx bxs-sun"></i>
			<i className="bx bxs-moon"></i>
			<div className={classBall}></div>
		</div>
	);
};
