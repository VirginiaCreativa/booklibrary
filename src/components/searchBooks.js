import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';


class SearchBooks extends Component {

	constructor(props) {
		super(props);
		this.state = {
			query: ''
		}
	}

	search(){
		const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
		fetch(`${BASE_URL}${this.state.query}`, { method: 'GET' })
			.then((response) => response.json())
			.then((json) => console.log(json))
			.catch((ex) => 
			    console.log('parsing failed', ex)
			)
		console.log(this.state.query);
	}

	render() {
		return (
			<Form>
				<Input type="search" placeholder="Search" 
					onChange={event => this.setState({query: event.target.value})}
					onKeyDown={ev => {
						let keycode = (ev.keyCode ? ev.keyCode : ev.which);
						if (keycode === 13) {
							this.search();
						}
					}}
				/>
				<Button onClick={(ev) => this.search()} className="btnSearch"><i className="ion-ios-search"></i></Button>
			</Form>
		);
	}
}
export default SearchBooks;