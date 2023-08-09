import React, { useState } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import {
	filterMenuData,
	findProductMenuById,
	handleShowMenu,
	handleShowOrder,
} from "../../store/menuSlice";
import { DarkMode } from "../DarkMode";
import { productsMenu } from "../../helpers";

export const Navbar = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.menu.menuData);
	const showMenu = useSelector((state) => state.menu.showMenu);
	const showOrder = useSelector((state) => state.menu.showOrder);
	const order = useSelector((state) => state.menu.order);

	const [itemProducts, setItemProducts] = useState(productsMenu(products));

	const classMenu = showMenu ? "menu menu--show" : "menu";
	const classIconMenu = showMenu
		? "bx bx-x icon--menu"
		: "bx bx-menu icon--menu";
	const classIconOrder = showOrder
		? "bx bx-x icon--order"
		: "bx bx-bowl-hot icon--order";

	const handleSetItemProducts = (title) => {
		setItemProducts(
			itemProducts.map((item) =>
				item.title === title
					? { ...item, state: true }
					: { ...item, state: false }
			)
		);
	};

	return (
		<header className="content__navbar">
			<nav className="navbar">
				<a href="#" className="navbar__logo">
					LOGO
				</a>

				<div className="navbar__opt">
					<DarkMode />
					<i
						className={classIconOrder}
						onClick={() => {
							if (showMenu) {
								dispatch(handleShowMenu(false));
							}
							dispatch(handleShowOrder(!showOrder));
						}}
					>
						<div>
							<span>
								{Object.values(order).reduce(
									(acum, curr) => (acum += curr.amount),
									0
								)}
							</span>
						</div>
					</i>
					<i
						className={classIconMenu}
						onClick={() => {
							if (showOrder) {
								dispatch(handleShowOrder(false));
							}
							dispatch(handleShowMenu(!showMenu));
						}}
					></i>
				</div>

				<ul className={classMenu}>
					{itemProducts.map(({ amount, state, title }) => {
						return (
							<ItemMenu
								key={title}
								title={title}
								amount={amount}
								isActiveItem={state}
								handleSetItemProducts={handleSetItemProducts}
							/>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};

function ItemMenu({ title, amount, isActiveItem, handleSetItemProducts }) {
	const dispatch = useDispatch();
	const showMenu = useSelector((state) => state.menu.showMenu);

	const classItemMenu = isActiveItem ? "item item--active" : "item";

	return (
		<li
			className={classItemMenu}
			onClick={() => {
				dispatch(filterMenuData({ tag: title }));
				dispatch(findProductMenuById({ id: null }));
				dispatch(handleShowMenu(!showMenu));
				handleSetItemProducts(title);
			}}
		>
			<p>{title}</p>
			<span>{amount}</span>
		</li>
	);
}
