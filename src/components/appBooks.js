import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';
import ItemsBooks from './itemsBooks.js';


class AppBooks extends Component {

	constructor(props) {
		super(props);
		this.state = {
			query: '',
			items: []
		}
	}

	search(){
		const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
		fetch(`${BASE_URL}${this.state.query}`, { method: 'GET' })
			.then(response => response.json())
			.then(json => {
				console.log(json);
				let { items } = json;
				this.setState({items})
			})
			.catch(ex => 
			    console.log('parsing failed', ex)
			)
	}

	render() {
		return (
			<div>
				<div id='search'>
					<Form>
						<Input type="search" placeholder="Search"
							onChange={event => this.setState({query: event.target.value})}
							onKeyPress={(ev) => {
								if (ev.key === 13 || ev.key === 'Enter' ) {
									ev.preventDefault();
									this.search();
								}
							}}
						/>
						<Button onClick={(ev) => this.search()} className="btnSearch"><i className="ion-ios-search"></i></Button>
					</Form>
				</div>
				<ItemsBooks items={this.state.items}/>
			</div>

		)
	}
}
export default AppBooks;