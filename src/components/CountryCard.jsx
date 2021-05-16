import React, { Component } from "react";
import { Link } from "react-router-dom";

export class CountryCard extends Component {
  state = { value: "" };

  render() {
    return (
      <Link to={`/${this.props.isoCode}`}>
        <li>{this.props.name}</li>
      </Link>
    );
  }
}

export default CountryCard;
