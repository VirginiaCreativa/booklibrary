import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class ItemsBooks extends Component {
	render() {
		return (
			<div id='items_Books'>
				<Row>
				{
					this.props.items.map((item, index) => {
						let { title, authors, imageLinks, selfLink } = item.volumeInfo 
						return (
						<div key={index}>
							<Col>
									<div className="item">
									
										<div className='imgBook'>
											<img src={imageLinks.thumbnail} alt={title, authors} className="img-fluid" />
										</div>
										<div className="single-content">
											<a href="">
												<h3>{title}</h3>
											</a>
											<h5>{authors}</h5>
										</div>

									</div>
						
							</Col>
						</div>
					 	)
					})

				}

				</Row>
			</div>
		)
	}
}
export default ItemsBooks;