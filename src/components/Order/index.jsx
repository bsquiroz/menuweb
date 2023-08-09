import React from "react";
import "./styles.css";

import { useSelector, useDispatch } from "react-redux";
import { formattedPrice } from "../../helpers";
import {
	handleRestOrder,
	handleDeleteOrder,
	handleAddOrder,
} from "../../store/menuSlice";

export const Order = () => {
	const dispatch = useDispatch();
	const showOrder = useSelector((state) => state.menu.showOrder);
	const order = useSelector((state) => state.menu.order);

	const classOrder = showOrder ? "order order--show" : "order";

	const ContentOrder = Object.values(order).length ? (
		Object.values(order).map((item) => (
			<div key={item.id} className="order__item">
				<div className="order__item__img">
					<img src={item.picture} alt="" />
				</div>
				<div className="order__item__info">
					<h5>{item.title}</h5>
					<p>
						<small>
							{formattedPrice(item.amount * item.price)}
						</small>
					</p>
					<div className="order__item__opt">
						<i
							className="bx bx-minus"
							onClick={() => dispatch(handleRestOrder(item.id))}
						></i>
						<span>{item.amount}</span>
						<i
							className="bx bx-plus"
							onClick={() => dispatch(handleAddOrder(item.id))}
						></i>
						<i
							className="bx bx-trash"
							onClick={() => dispatch(handleDeleteOrder(item.id))}
						></i>
					</div>
				</div>
			</div>
		))
	) : (
		<div className="order__empty">
			<h2>
				¿No tienes hambre?
				<br />
				¿Que esperas para pedir?
			</h2>
		</div>
	);

	return (
		<div className={classOrder}>
			{Object.values(order).length ? (
				<>
					<div className="order__items">{ContentOrder}</div>
					<div className="order__total">
						<h3>
							{formattedPrice(
								Object.values(order).reduce(
									(acum, curr) =>
										(acum += curr.amount * curr.price),
									0
								)
							)}
						</h3>
					</div>
				</>
			) : (
				<div className="order__items">{ContentOrder}</div>
			)}
		</div>
	);
};
