import React, { Component } from "react";
import { connect } from "react-redux";

import CategoryContainer from "../containers/category.container";

import { fetchCategoriesAsync } from "../redux/category/category-actions";

class Homepage extends Component {
	componentDidMount() {
		this.props.fetchCategories();
	}

	render() {
		return <CategoryContainer />;
	}
}

const mapDispatchToProps = (dispatch) => ({
	fetchCategories: () => dispatch(fetchCategoriesAsync()),
});

export default connect(null, mapDispatchToProps)(Homepage);
