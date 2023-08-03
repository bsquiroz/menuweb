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
			<Container>
				<Header />
				<Board />
				<CardBanner />
			</Container>
			<Navbar />
			<Footer />
		</>
	);
};
