import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchCollectionStart } from "../redux/collection/collection-actions";
import CollectionContainer from "../containers/collection.container";
import { selectCategoryId } from "../redux/category/category-selectors";

const Collection = ({ fetchCollection, categoryId, match }) => {
	useEffect(() => {
		fetchCollection(categoryId, match.params.categoryId);
	}, [fetchCollection, categoryId, match.params.categoryId]);

	return <CollectionContainer />;
};

const mapStateToProps = (state, ownProps) => ({
	categoryId: selectCategoryId(ownProps.match.params.categoryId)(state),
});

const mapDispatchToProps = (dispatch) => ({
	fetchCollection: (categoryId, categoryName) =>
		dispatch(fetchCollectionStart(categoryId, categoryName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
