import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { addCollection } from "../redux/collection/collection-actions.js";
import ItemPreview from "./ItemPreview.jsx";

class Collection extends Component {
	componentDidMount() {
		axios
			.get(`/categories/${this.props.category.id}/products`)
			.then((res) => {
				this.props.addCollection(res.data.data);
			})
			.catch((error) => console.log(error));
	}

	render() {
		return (
			<div>
				<div className="mb-4">
					<h2 className="text-left text-gray-800 text-2xl">
						{this.props.category.name}
					</h2>
					<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 py-5">
						{this.props.collection.map((item) => (
							<ItemPreview key={item.id} item={item} />
						))}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	category: state.categories.categories.filter(
		(category) => category.name === ownProps.match.params.categoryId
	)[0],
	collection: state.collection.collection,
});

const mapDispatchToProps = (dispatch) => ({
	addCollection: (collection) => dispatch(addCollection(collection)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
