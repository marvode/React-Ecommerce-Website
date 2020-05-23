import React, { Component } from "react";
import { connect } from "react-redux";

import CategoryContainer from "../containers/category.container";

import { fetchCategoriesStart } from "../redux/category/category-actions";

class Homepage extends Component {
	componentDidMount() {
		this.props.fetchCategoriesStart();
	}

	render() {
		return <CategoryContainer />;
	}
}

const mapDispatchToProps = (dispatch) => ({
	fetchCategoriesStart: () => dispatch(fetchCategoriesStart()),
});

export default connect(null, mapDispatchToProps)(Homepage);
