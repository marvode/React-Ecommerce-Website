import React, { Component } from "react";
import { connect } from "react-redux";

import Category from "../components/Category";
import { addCategories } from "../redux/category/category-actions";
import axios from "axios";

class Homepage extends Component {
	componentDidMount() {
		axios
			.get("/categories?per_page=8")
			.then((res) => this.props.addCategories(res.data.data));
	}

	render() {
		return (
			<div>
				<Category />
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	addCategories: (categories) => dispatch(addCategories(categories)),
});

export default connect(null, mapDispatchToProps)(Homepage);
