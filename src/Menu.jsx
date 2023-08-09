import React from "react";
import {
	Container,
	Board,
	Navbar,
	CardBanner,
	Header,
	Footer,
} from "./components";

export const Menu = () => {
	return (
		<>
			<Navbar />
			<Container>
				<Header />
				<Board />
				<CardBanner />
			</Container>
			<Footer />
		</>
	);
};
