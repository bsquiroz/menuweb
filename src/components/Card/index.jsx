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
		<div className="card">
			<div className="card__img">
				<div className="card__banner">
					<i class="bx bxs-show" onClick={() => handleClick(id)}></i>
				</div>
				<img src={picture} alt={`imagen ${title}`} />
			</div>
			<h3>{title}</h3>
		</div>
	);
};
