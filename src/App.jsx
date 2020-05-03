import React, { Component } from "react";

import RedmineList from "./components/RedmineList.jsx";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const promise = fetch(this.props.urlData, {
      credentials: "include"
    });

    promise
      .then(res => res.json())
      .then(response =>
        this.setState(() => ({
          data: response
        }))
      );
  }

  render() {
    return (
      <>
        {this.state.data.length !== 0 && (
          <RedmineList projects={this.state.data} />
        )}
      </>
    );
  }
}
