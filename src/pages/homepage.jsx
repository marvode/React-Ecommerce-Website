import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import Category from "../components/Category";

import WithSpinner from "../components/SpinnerHOC";

import { addCategories } from "../redux/category/category-actions";

const CategoryWithSpinner = WithSpinner(Category);

class Homepage extends Component {
	state = {
		loading: true,
	};

	componentDidMount() {
		axios.get("/categories").then((res) => {
			this.props.addCategories(res.data.data);
			this.setState({ loading: false });
		});
	}

	render() {
		return (
			<div>
				<CategoryWithSpinner isLoading={this.state.loading} />
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	addCategories: (categories) => dispatch(addCategories(categories)),
});

export default connect(null, mapDispatchToProps)(Homepage);
