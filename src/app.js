import React from "react";
import { render } from "react-dom";
import Books from "./components/books.js"

const pruebaReact = document.querySelector('.pruebaReact');

render(
	<Books/>, pruebaReact
);