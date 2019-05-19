import React from "react";

export default class CardComponent extends React.Component {
  
  render() {
    return (
      <div>
        <button type="button"> {this.props.name}</button>
      </div>
    );
  }
}
