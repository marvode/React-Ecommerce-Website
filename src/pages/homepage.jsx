import React, { Component } from "react";
import { connect } from "react-redux";

import Category from "../components/Category";

import WithSpinner from "../components/SpinnerHOC";

import { fetchCategoriesAsync } from "../redux/category/category-actions";
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
	fetchCategories: () => dispatch(fetchCategoriesAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
