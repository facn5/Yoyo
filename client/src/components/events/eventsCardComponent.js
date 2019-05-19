import React from "react";
export default class EventCard extends React.Component {

  render() {
    return (
      <div>

            <button type="button" className="btn">

            <div className="time">{this.props.time}</div>
            <div className="name">{this.props.name}</div>
            <div className="ages">{this.props.ages}</div>

           </button>

      </div>
    );
  }
}
