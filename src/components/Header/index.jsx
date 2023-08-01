import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";

export const Header = () => {
	const titleHeader = useSelector((state) => state.menu.titleHeader);
	return <div className="header">{titleHeader}</div>;
};
