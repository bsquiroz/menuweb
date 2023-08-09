import { createSlice } from "@reduxjs/toolkit";
import { menuData } from "../data/menu";

const initialState = {
	menuData: menuData,
	menuDataFilter: menuData,
	titleHeader: "todos",
	selectItem: null,
	showBannerProduct: false,
	showMenu: false,
	showOrder: false,
	order: {},
};

export const counterSlice = createSlice({
	name: "menu",
	initialState,
	reducers: {
		findProductMenuById: (state, action) => {
			state.selectItem = state.menuData.find(
				(itemMenu) => itemMenu.id === action.payload.id
			);
		},
		filterMenuData: (state, action) => {
			if (action.payload.tag !== "todos") {
				state.menuDataFilter = state.menuData.filter(
					(itemMenu) => itemMenu.tag === action.payload.tag
				);
				state.titleHeader = action.payload.tag;
			} else {
				state.menuDataFilter = state.menuData;
				state.titleHeader = "todos";
			}
		},
		handleShowBannerProduct: (state, action) => {
			state.showBannerProduct = action.payload;
		},
		handleShowMenu: (state, action) => {
			state.showMenu = action.payload;
		},
		handleShowOrder: (state, action) => {
			state.showOrder = action.payload;
		},
		handleAddOrder: (state, action) => {
			const item = state.menuData.find(
				(product) => product.id === action.payload
			);
			if (state.order[item.id]) {
				state.order[item.id]["amount"]++;
			} else {
				state.order[item.id] = {
					...item,
					amount: 1,
				};
			}
		},
		handleRestOrder: (state, action) => {
			if (state.order[action.payload].amount === 1) {
				delete state.order[action.payload];
			} else {
				state.order[action.payload].amount--;
			}
		},
		handleDeleteOrder: (state, action) => {
			delete state.order[action.payload];
		},
	},
});

export const {
	findProductMenuById,
	filterMenuData,
	handleShowBannerProduct,
	handleShowMenu,
	handleShowOrder,
	handleAddOrder,
	handleRestOrder,
	handleDeleteOrder,
} = counterSlice.actions;

export default counterSlice.reducer;
