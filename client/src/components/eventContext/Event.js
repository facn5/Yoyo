import React from 'react';

const Event = ({name, location, description, photo, days, singlePrice,
  termPrice, maxChild, minAge, maxAge, languages, superpowers}) => {
  return (
    <div>
      <h2>{name}{minAge}{maxAge}</h2>
      <h3>{days}{location}{singlePrice}{termPrice}</h3>
      <p>{description}{photo}</p>
      <p>{languages}{superpowers}</p>
    </div>

  )
}

export default Event;
