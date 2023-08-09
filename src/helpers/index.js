export const formattedPrice = (price) => {
	const priceInCOP = price * 1000;
	return priceInCOP.toLocaleString("es-CO") + " cop";
};

export const formattedOffer = (price, offer) => {
	const desc = price * (offer / 100);
	const priceInCOP = (price - desc) * 1000;
	return priceInCOP.toLocaleString("es-CO") + " cop";
};

export const productsMenu = (products) => {
	return Object.values(
		products.reduce(
			(acum, curr) => {
				acum[curr.tag] = {
					title: curr.tag,
					amount: acum[curr.tag]?.amount + 1 || 1,
					state: false,
				};

				return acum;
			},
			{
				todos: {
					title: "todos",
					amount: products.length,
					state: true,
				},
			}
		)
	);
};

export const resetOrderLocalStorage = (order) => {
	localStorage.setItem("orderMenu", JSON.stringify(order));
};
