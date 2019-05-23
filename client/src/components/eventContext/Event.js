import React, { useState } from 'react';

const Event = (props) => {

  const [viz, setViz] = useState(false);

  const toggle = () => {
    setViz(!viz);
  }

  return(
    <div>
      <fieldset onClick={toggle}><legend className="legend">{props.name}</legend>
      <h3>{props.days} in {props.location}</h3><div className={viz ? "" : "bodyInfo"}>
      <p>{props.description}. Age {props.minAge} to {props.maxAge}.</p>
      <p>Single price:₪{props.singlePrice}, Full term:₪{props.termPrice}</p>
      <p>Languages:{props.languages} Superpowers:{props.superpowers}</p></div>
    </fieldset>
    </div>
  )
}

export default Event;
