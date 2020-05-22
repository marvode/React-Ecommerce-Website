import { compose } from "redux";
import { connect } from "react-redux";

import CollectionOverview from "../components/CollectionOverview";
import SpinnerHOC from "../components/SpinnerHOC";
import {
	selectIsCollectionLoaded,
	selectCollections,
} from "../redux/collection/collection-selectors";
import { createStructuredSelector } from "reselect";

const mapStateToProps = createStructuredSelector({
	collection: selectCollections,
	isLoading: (state) => !selectIsCollectionLoaded(state),
});

const CollectionContainer = compose(
	connect(mapStateToProps),
	SpinnerHOC
)(CollectionOverview);

export default CollectionContainer;
