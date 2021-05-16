import React, { Component } from "react";

export class Loading extends Component {
  render() {
    return (
      <div className="spinner-container">
        <div className="spinner" />
      </div>
    );
  }
}

export default Loading;
