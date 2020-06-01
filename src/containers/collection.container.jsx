import { compose } from "redux";
import { connect } from "react-redux";

import CollectionOverview from "../components/CollectionOverview";
import SpinnerHOC from "../components/SpinnerHOC";
import {
	selectCollections,
	selectIsCollectionFetching,
} from "../redux/collection/collection-selectors";
import { createStructuredSelector } from "reselect";

const mapStateToProps = createStructuredSelector({
	collections: selectCollections,
	isLoading: selectIsCollectionFetching,
});

const CollectionContainer = compose(
	connect(mapStateToProps),
	SpinnerHOC
)(CollectionOverview);

export default CollectionContainer;
