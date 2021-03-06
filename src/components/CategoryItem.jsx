import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class CategoryItem extends Component {
	render() {
		const { img, name, history } = this.props;
		return (
			<div
				className="bg-white overflow-hidden antialiased shadow rounded-lg cursor-pointer hover:opacity-75"
				onClick={() => history.push(`/categories/${name}`)}
				data-aos="fade-up"
				data-aos-easeing="ease-in-out"
			>
				<div className="relative" style={{ paddingBottom: "100%" }}>
					<img
						className="absolute top-0 h-full w-full object-cover"
						src={img}
						alt=""
					/>
					<div className="absolute bottom-0 w-full p-3 flex justify-center mb-16">
						<div className="w-3/4 bg-gray-100 bg-opacity-50">
							<p className="py-3 text-center text-gray-900 uppercase img-embedded">
								{name}
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(CategoryItem);
