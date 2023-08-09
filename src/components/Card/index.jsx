import React from "react";
import "./styles.css";

import { useDispatch } from "react-redux";
import {
	findProductMenuById,
	handleShowMenu,
	handleShowOrder,
	handleAddOrder,
} from "../../store/menuSlice";
import { formattedPrice } from "../../helpers";

export const Card = ({ title, picture, id, price }) => {
	const dispatch = useDispatch();

	const handleShowProduct = (cardId) => {
		dispatch(findProductMenuById({ id: cardId }));
		dispatch(handleShowMenu(false));
		dispatch(handleShowOrder(false));
	};

	return (
		<div className="card">
			<div className="card__img">
				<div className="card__banner">
					<i
						className="bx bxs-show"
						onClick={() => handleShowProduct(id)}
					></i>
				</div>
				<img src={picture} alt={`imagen ${title}`} />
			</div>
			<div className="card__info">
				<h4>{title}</h4>
				<p className="card__price">{formattedPrice(price)}</p>
				<button
					className="card__btn"
					onClick={() => dispatch(handleAddOrder(id))}
				>
					Pedir
				</button>
			</div>
		</div>
	);
};
