import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchCollectionStartAsync } from "../redux/collection/collection-actions";
import WithSpinner from "./SpinnerHOC";
import {
	selectCollections,
	selectIsCollectionFetching,
	selectIsCollectionLoaded,
} from "../redux/collection/collection-selectors";
import { selectCategoryId } from "../redux/category/category-selectors";
import CollectionOverview from "./CollectionOverview";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

class Collection extends Component {
	componentDidMount() {
		this.props.fetchCollection(this.props.categoryId);
	}

	render() {
		return (
			<CollectionOverviewWithSpinner
				isLoading={!this.props.isLoaded}
				name={this.props.match.params.categoryId}
				collection={this.props.collection}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	categoryId: selectCategoryId(ownProps.match.params.categoryId)(state),
	collection: selectCollections(state),
	isFetching: selectIsCollectionFetching(state),
	isLoaded: selectIsCollectionLoaded(state),
});

const mapDispatchToProps = (dispatch) => ({
	fetchCollection: (categoryId) =>
		dispatch(fetchCollectionStartAsync(categoryId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
