import React from "react";
import { render } from "react-dom";
import Books from "./components/books"

const contentBooks = document.querySelector('#contentBooks');

render(
	<Books/>, contentBooks
);