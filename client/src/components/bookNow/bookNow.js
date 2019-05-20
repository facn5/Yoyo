import React from "react";

export const BookNow = props => {
  return (
    <>
      <div className="name">
        <h3>name: {props.name}</h3>
      </div>
      <div className="infoTotal">
      <div className="description">
        <p>description: {props.description} </p>
      </div>
      <div className="info">
        <div className="infocontTop">
          <div className="teacher">
            <p>
              Teacher & Location: {props.teacher} {props.location}
            </p>
          </div>
          <div className="skillsTr">
            <p>Skills Trained: {props.skills}</p>
          </div>
        </div>
        <div className="infocontBot">
          <div className="price">
            <p>Price: {props.price}NIS</p>
          </div>
          <div className="dates">
            <p>Dates: {props.dates}</p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};
