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
		console.log('ev', this.state.query);
	}
	render() {
		return (
			<Form>
				<Input type="search" placeholder="Search" 
					onChange={event => this.setState({query: event.target.value})}
					onKeyPress={ev => {
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