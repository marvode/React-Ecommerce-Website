import React, { Component } from "react";
import axios from "axios";

const GetResources = (WrappedComponenet, dataSource, returnFunction) => {
	class GetResources extends Component {
		state = {
			loading: false,
			data: [],
		};

		componentDidMount() {
			this.setState({ loading: true });
			axios
				.get(dataSource)
				.then((res) => {
					returnFunction(res.data.data);
					this.setState({ data: res.data.data });
					this.setState({ loading: false });
				})
				.catch((error) => console.log(error));
		}

		render() {
			return (
				<WrappedComponenet
					data={this.state.data}
					loading={this.state.loading}
					{...this.props}
				/>
			);
		}
	}

	return GetResources;
};

export default GetResources;
