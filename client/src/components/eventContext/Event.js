import React from 'react';

const Event = ({name, location, description, photo, days, singlePrice,
  termPrice, maxChild, minAge, maxAge, languages, superpowers}) => {
  return (
    <div>
      <h2>{name} Ages {minAge} to {maxAge}</h2>
      <h3>{days} in {location}.  One day:₪{singlePrice} Full term:₪{termPrice}</h3>
      <p>{description}{photo}</p>
      <p>Languages:{languages}.  Superpowers:{superpowers}</p>
    </div>

  )
}

export default Event;
