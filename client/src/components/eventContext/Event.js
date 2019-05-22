import React from 'react';

const Event = (props) => {
  return(
    <div>
      <h2>{props.name} for age {props.minAge} to {props.maxAge}</h2>
      <h3>{props.days} in {props.location}</h3>
      <p>{props.description}</p>
      <p>Single price:{props.singlePrice}, Full term:{props.termPrice}</p>
      <p>Languages:{props.languages} Superpowers:{props.superpowers}</p>
      {props.photo}
    </div>
  )
}

export default Event;
