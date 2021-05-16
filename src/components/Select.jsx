import React, { Component } from "react";

export class Select extends Component {
  render() {
    return (
      <span className="select-container">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <select id={this.props.id} onChange={this.props.handleSelect}>
          {Object.entries(this.props.options).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
      </span>
    );
  }
}

export default Select;
