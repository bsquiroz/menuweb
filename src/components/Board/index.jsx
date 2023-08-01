import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import { Card } from "../Card";

export const Board = () => {
	const items = useSelector((state) => state.menu.menuDataFilter);

	return (
		<div className="board">
			{items.map(({ id, title, picture }) => (
				<Card key={id} id={id} title={title} picture={picture} />
			))}
		</div>
	);
};
