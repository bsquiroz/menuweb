import React from "react";
import {
	Container,
	Board,
	Navbar,
	CardBanner,
	Header,
	Footer,
	Order,
} from "./components";

export const Menu = () => {
	return (
		<>
			<Navbar />
			<Order />
			<Container>
				<Header />
				<Board />
				<CardBanner />
			</Container>
			<Footer />
		</>
	);
};
