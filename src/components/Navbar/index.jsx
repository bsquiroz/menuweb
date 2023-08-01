import React, { useState } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { filterMenuData } from "../../store/menuSlice";

export const Navbar = () => {
	const dispatch = useDispatch();
	const [isVisibleMenu, setIsVisibleMenu] = useState(false);
	const products = useSelector((state) => state.menu.menuData);
	const productsMenu = Object.entries(
		products.reduce((acum, curr) => {
			acum[curr.tag] = acum[curr.tag] + 1 || 1;
			return acum;
		}, {})
	);

	const classMenu = isVisibleMenu ? "menu menu--show" : "menu";

	return (
		<nav className="navbar">
			<a href="#" className="navbar__logo">
				LOGO
			</a>

			<i
				className="bx bx-menu icon--menu"
				onClick={() => setIsVisibleMenu(!isVisibleMenu)}
			></i>

			<ul className={classMenu}>
				<li
					className="item"
					onClick={() => {
						dispatch(filterMenuData({ tag: false }));
						setIsVisibleMenu(!isVisibleMenu);
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
								setIsVisibleMenu(!isVisibleMenu);
							}}
						>
							<p>{key}</p>
							<span>{value}</span>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
