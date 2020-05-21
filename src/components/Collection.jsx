import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchCollectionStartAsync } from "../redux/collection/collection-actions";
import WithSpinner from "./SpinnerHOC";
import {
	selectCollections,
	selectIsCollectionFetching,
	selectIsCollectionLoaded,
} from "../redux/collection/collection-selectors";
import CollectionOverview from "./CollectionOverview";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

class Collection extends Component {
	componentDidMount() {
		this.props.fetchCollection(this.props.category.id);
	}

	render() {
		return (
			<CollectionOverviewWithSpinner
				isLoading={!this.props.isLoaded}
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
	isFetching: selectIsCollectionFetching(state),
	isLoaded: selectIsCollectionLoaded(state),
});

const mapDispatchToProps = (dispatch) => ({
	fetchCollection: (categoryId) =>
		dispatch(fetchCollectionStartAsync(categoryId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
