import React, { Component } from 'react';

class ItemsBooks extends Component {
	render() {
		return (
			<div id='items_Books '>
				<div className="row">
					<div className="col-md-3 col-sm-12">
						<div id="items_Books">
							<div className="item">
								{
									this.props.items.map((item, index) => {
										let {title} = item.volumeInfo
										return (
											<h3 key={index}>{title}</h3>
										)
									})
								}
								{/*<div className="link-overlay">
									<p className="price">$39</p>
									<a href=""><i className="ion-link"></i></a>
								</div>
								<img src="https://prodimage.images-bn.com/pimages/9780525538530_p0_v3_s600x595.jpg" alt="Book" className="img-fluid" />
								<div className="single-content">
									<a href="">
										<h3>Title Book</h3>
									</a>
									<h5>Autor Book</h5>
								</div>*/}
							</div>
						</div>
					</div>
				</div>	
			</div>
		);
	}
}
export default ItemsBooks;