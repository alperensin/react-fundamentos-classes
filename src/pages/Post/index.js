import React from "react";

export default class Post extends React.Component {
  constructor(props) {
    super(props);

    const { params } = this.props.match;
    const { search } = this.props.location;
    const queryParams = new URLSearchParams(search);

    this.state = {
      params,
      search,
      queryParams,
    };
  }

  render() {
    const { params, search, queryParams } = this.state;

    console.log({
      params,
      search,
      queryParams,
      orderBy: queryParams.get("orderBy"),
    });

    return <h1>Post Page</h1>;
  }
}
