import { createSlice } from "@reduxjs/toolkit";
import { menuData } from "../data/menu";

const initialState = {
	menuData: menuData,
	menuDataFilter: menuData,
	titleHeader: "todos",
	selectItem: null,
	showBannerProduct: false,
	showMenu: false,
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
	},
});

export const {
	findProductMenuById,
	filterMenuData,
	handleShowBannerProduct,
	handleShowMenu,
} = counterSlice.actions;

export default counterSlice.reducer;
