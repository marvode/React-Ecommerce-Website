import React, { Component } from "react";
import { connect } from "react-redux";

import Category from "../components/Category";
import { selectCategories } from "../redux/category/category-selectors";
import { addCategories } from "../redux/category/category-actions";
import axios from "axios";

class Homepage extends Component {
	componentDidMount() {
		axios
			.get("/categories?per_page=8")
			.then((res) => this.props.addCategories(res.data.data));
	}

	render() {
		console.log(this.props.categories);
		return (
			<div>
				<Category data={this.props.categories} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	categories: selectCategories(state),
});

const mapDispatchToProps = (dispatch) => ({
	addCategories: (categories) => dispatch(addCategories(categories)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
