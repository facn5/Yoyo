import React from "react";
import "./button.css";

export default class StyledButton extends React.Component {
  render() {
    return (
      <button type="button">{this.props.name} </button>

  );
  }
}
