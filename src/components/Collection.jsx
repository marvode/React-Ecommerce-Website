import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchCollectionStartAsync } from "../redux/collection/collection-actions";
import CollectionContainer from "../containers/collection.container";
import { selectCategoryId } from "../redux/category/category-selectors";

class Collection extends Component {
	componentDidMount() {
		this.props.fetchCollection(this.props.categoryId);
	}

	render() {
		return <CollectionContainer />;
	}
}

const mapStateToProps = (state, ownProps) => ({
	categoryId: selectCategoryId(ownProps.match.params.categoryId)(state),
});

const mapDispatchToProps = (dispatch) => ({
	fetchCollection: (categoryId) =>
		dispatch(fetchCollectionStartAsync(categoryId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
