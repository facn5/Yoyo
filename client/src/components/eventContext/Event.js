import React from 'react';

const Event = (props) => {
  return(
    <div>
      <fieldset><legend className="legend">{props.name}</legend>
      <h3>{props.days} in {props.location}</h3>
      <p>{props.description}. Age {props.minAge} to {props.maxAge}.</p>
      <p>Single price:₪{props.singlePrice}, Full term:₪{props.termPrice}</p>
      <p>Languages:{props.languages} Superpowers:{props.superpowers}</p>
    </fieldset>
    </div>
  )
}

export default Event;
