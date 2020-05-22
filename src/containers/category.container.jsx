import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectIsCategoryLoaded } from "../redux/category/category-selectors";
import SpinnerHOC from "../components/SpinnerHOC";
import Category from "../components/Category";

const mapStateToProps = createStructuredSelector({
	isLoading: (state) => !selectIsCategoryLoaded(state),
});

const CategoryContainer = compose(
	connect(mapStateToProps),
	SpinnerHOC
)(Category);

export default CategoryContainer;
