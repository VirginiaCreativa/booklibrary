import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';


class SearchBooks extends Component {

	search(){
		console.log('ev');
	}
	render() {
		return (
			<Form>
				<Input type="search" placeholder="Search" />
				<Button onClick={(ev) => this.search()} className="btnSearch"><i className="ion-ios-search"></i></Button>
			</Form>
		);
	}
}
export default SearchBooks;