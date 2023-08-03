import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	findProductMenuById,
	handleShowBannerProduct,
	handleShowMenu,
} from "../../store/menuSlice";
import "./styles.css";
import { formattedPrice, formattedOffer } from "../../helpers";

export const CardBanner = () => {
	const selectItem = useSelector((state) => state.menu.selectItem);
	const showBannerProduct = useSelector(
		(state) => state.menu.showBannerProduct
	);

	const dispatch = useDispatch();

	const classCardBanner = selectItem
		? "cardBanner cardBanner--show"
		: "cardBanner";

	const classBannerInfo = showBannerProduct
		? "banner__info banner__info--show"
		: "banner__info";

	const classBannerPrice = selectItem?.offer
		? "banner__info__price--desc"
		: "banner__info__price";

	useEffect(() => {
		return () => {
			dispatch(handleShowBannerProduct(false));
		};
	}, [selectItem]);

	useEffect(() => {
		if (selectItem) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [selectItem]);

	return (
		<div className={classCardBanner}>
			<div className="banner">
				<i
					className="bx bxs-chevron-left-circle icon_left"
					onClick={() => {
						dispatch(handleShowMenu(false));
						dispatch(findProductMenuById({ id: null }));
					}}
				></i>
				{showBannerProduct && (
					<i
						className="bx bxs-x-circle icon_close_banner"
						onClick={() => dispatch(handleShowBannerProduct(false))}
					></i>
				)}

				<div className="banner__info__video">
					<video
						src={selectItem?.video}
						autoPlay
						loop
						playsInline
						poster={selectItem?.picture}
					></video>
				</div>

				<div
					className="banner__show__more"
					onClick={() => dispatch(handleShowBannerProduct(true))}
				>
					<p>Ver información</p>
				</div>

				<div className={classBannerInfo}>
					<h3 className="banner__info__title">{selectItem?.title}</h3>
					<p className="banner__info__description">
						{selectItem?.description}
					</p>
					<p className={classBannerPrice}>
						precio: {formattedPrice(selectItem?.price)}
					</p>
					{selectItem?.offer ? (
						<p className="banner__info__offer">
							precio por hoy:{" "}
							{formattedOffer(
								selectItem?.price,
								selectItem?.offer
							)}
						</p>
					) : null}

					<div className="content_ingredients">
						<p>
							<b>Ingredientes</b>
						</p>
						<ul className="ingredients">
							{selectItem?.ingredients.map(
								({ id, icon, picture, title }) => (
									<li key={id} className="ingredient">
										{title}
									</li>
								)
							)}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
