import React from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import {
	filterMenuData,
	findProductMenuById,
	handleShowMenu,
} from "../../store/menuSlice";
import { DarkMode } from "../DarkMode";

export const Navbar = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.menu.menuData);
	const showMenu = useSelector((state) => state.menu.showMenu);

	const productsMenu = Object.entries(
		products.reduce((acum, curr) => {
			acum[curr.tag] = acum[curr.tag] + 1 || 1;
			return acum;
		}, {})
	);

	const classMenu = showMenu ? "menu menu--show" : "menu";
	const classIconMenu = showMenu
		? "bx bx-x icon--menu"
		: "bx bx-menu icon--menu";

	return (
		<header className="content__navbar">
			<nav className="navbar">
				<a href="#" className="navbar__logo">
					LOGO
				</a>

				<div className="navbar__opt">
					<DarkMode />
					<i
						className={classIconMenu}
						onClick={() => dispatch(handleShowMenu(!showMenu))}
					></i>
				</div>

				<ul className={classMenu}>
					<li
						className="item"
						onClick={() => {
							dispatch(filterMenuData({ tag: false }));
							dispatch(findProductMenuById({ id: null }));
							dispatch(handleShowMenu(!showMenu));
						}}
					>
						<p>todos</p>
						<span>{products.length}</span>
					</li>
					{productsMenu.map(([key, value]) => {
						return (
							<li
								className="item"
								key={key}
								onClick={() => {
									dispatch(filterMenuData({ tag: key }));
									dispatch(findProductMenuById({ id: null }));
									dispatch(handleShowMenu(!showMenu));
								}}
							>
								<p>{key}</p>
								<span>{value}</span>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};
