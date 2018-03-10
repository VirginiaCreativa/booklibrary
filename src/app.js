import React from "react";
import { render } from "react-dom";
import AppBooks from "./components/appBooks"

const addSearch = document.querySelector('#appBooks');

render(
	<AppBooks/>, addSearch
);