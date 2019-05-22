import React from "react";

const EventCard = props => {
  return (
    <div>
      <button type="button" className="btn">
        <div className="time">{props.time}</div>
        <div className="name">{props.name}</div>
        <div className="ages">{props.ages}</div>
      </button>
    </div>
  );
};

export default EventCard;
