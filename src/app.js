import React from "react";
import { render } from "react-dom";
import SearchBooks from "./components/searchBooks"

const addSearch = document.querySelector('#formSearch');

render(
	<SearchBooks/>, addSearch
);