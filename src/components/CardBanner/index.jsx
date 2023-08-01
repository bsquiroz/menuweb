import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { findProductMenuById } from "../../store/menuSlice";
import "./styles.css";

export const CardBanner = () => {
	const selectItem = useSelector((state) => state.menu.selectItem);
	const dispatch = useDispatch();

	const classCardBanner = selectItem
		? "cardBanner cardBanner--show"
		: "cardBanner";

	return (
		<div className={classCardBanner}>
			<div className="banner">
				<i
					className="bx bxs-chevron-left-circle icon_left"
					onClick={() => dispatch(findProductMenuById({ id: null }))}
				></i>
			</div>
		</div>
	);
};
