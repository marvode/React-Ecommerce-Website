import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchCollectionStart } from "../redux/collection/collection-actions";
import CollectionContainer from "../containers/collection.container";
import { selectCategoryId } from "../redux/category/category-selectors";

const Collection = ({ fetchCollection, categoryId }) => {
	useEffect(() => {
		fetchCollection(categoryId);
	}, [fetchCollection, categoryId]);

	return <CollectionContainer />;
};

const mapStateToProps = (state, ownProps) => ({
	categoryId: selectCategoryId(ownProps.match.params.categoryId)(state),
});

const mapDispatchToProps = (dispatch) => ({
	fetchCollection: (categoryId) => dispatch(fetchCollectionStart(categoryId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
