import React from "react";
import "./styles.css";

import { useSelector } from "react-redux";

export const Order = () => {
	const showOrder = useSelector((state) => state.menu.showOrder);

	const classOrder = showOrder ? "order order--show" : "order";

	return (
		<div className={classOrder}>
			<div className="order__items"></div>
			<div className="order__total"></div>
		</div>
	);
};
