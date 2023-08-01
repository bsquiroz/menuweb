export const formattedPrice = (price) => {
	const priceInCOP = price * 1000;
	return priceInCOP.toLocaleString("es-CO") + " cop";
};

export const formattedOffer = (price, offer) => {
	const desc = price * (offer / 100);
	const priceInCOP = (price - desc) * 1000;
	return priceInCOP.toLocaleString("es-CO") + " cop";
};
