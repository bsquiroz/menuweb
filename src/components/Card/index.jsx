import React from "react";
import "./styles.css";

import { useDispatch } from "react-redux";
import { findProductMenuById, handleShowMenu } from "../../store/menuSlice";

export const Card = ({ title, picture, id }) => {
	const dispatch = useDispatch();

	const handleClick = (cardId) => {
		dispatch(findProductMenuById({ id: cardId }));
		dispatch(handleShowMenu(false));
	};

	return (
		<div className="card" onClick={() => handleClick(id)}>
			<div className="card__img">
				<img src={picture} alt={`imagen ${title}`} />
			</div>
			<h2>{title}</h2>
		</div>
	);
};
