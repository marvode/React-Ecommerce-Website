import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { addCollection } from "../redux/collection/collection-actions";
import WithSpinner from "./SpinnerHOC";
import { selectCollections } from "../redux/collection/collection-selectors";
import CollectionOverview from "./CollectionOverview";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

class Collection extends Component {
	state = {
		isLoading: true,
	};

	componentDidMount() {
		axios
			.get(`/categories/${this.props.category.id}/products`)
			.then((res) => {
				this.props.addCollection(res.data.data);
				this.setState({ isLoading: false });
			})
			.catch((error) => console.log(error));
	}

	render() {
		return (
			<CollectionOverviewWithSpinner
				isLoading={this.state.isLoading}
				name={this.props.category.name}
				collection={this.props.collection}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	category: state.categories.categories.filter(
		(category) => category.name === ownProps.match.params.categoryId
	)[0],
	collection: selectCollections(state),
});

const mapDispatchToProps = (dispatch) => ({
	addCollection: (collection) => dispatch(addCollection(collection)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
