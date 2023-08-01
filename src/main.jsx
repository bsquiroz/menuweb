import React from "react";
import ReactDOM from "react-dom/client";
import { Menu } from "./Menu.jsx";
import { store } from "./store/menuStore.js";
import { Provider } from "react-redux";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<Menu />
	</Provider>
);
