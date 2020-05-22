import React, { Component } from "react";
import { connect } from "react-redux";

import Category from "../components/Category";

import WithSpinner from "../components/SpinnerHOC";

import {
	addCategories,
	fetchCategoriesAsync,
	fetchCategoriesSuccess,
} from "../redux/category/category-actions";
import { selectIsCategoryLoaded } from "../redux/category/category-selectors";

const CategoryWithSpinner = WithSpinner(Category);

class Homepage extends Component {
	componentDidMount() {
		this.props.fetchCategories();
	}

	render() {
		return (
			<div>
				<CategoryWithSpinner isLoading={!this.props.isLoaded} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	isLoaded: selectIsCategoryLoaded(state),
});

const mapDispatchToProps = (dispatch) => ({
	addCategories: (categories) => dispatch(addCategories(categories)),
	fetchCategories: () => dispatch(fetchCategoriesAsync()),
	updateCategories: (categories) =>
		dispatch(fetchCategoriesSuccess(categories)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
