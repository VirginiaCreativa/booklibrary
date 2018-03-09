import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class Books extends Component {
	render() {
		return (
			<Form>
				<FormGroup>
					<Input type="search" placeholder="Search" />
					<Button type="" className="btnSearch"><i className="ion-ios-search"></i></Button>
				</FormGroup>
			</Form>
		);
	}
}
export default Books;