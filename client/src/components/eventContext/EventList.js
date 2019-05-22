import React, { useState } from 'react';
import Event from './Event';

const EventList = () => {
  const [events, setEvents] = useState ([
    { name: "Roni the Clown",
      location: "Nazareth",
      description: "Fun and games with Roni the Clown and friends",
      photo: "photo URL",
      days: "Saturday",
      singlePrice: 50,
      termPrice: 100,
      maxChild: 40,
      minAge: 5,
      maxAge: 11,
      languages: ["Arabic", "English", "Hebrew", "Russian"],
      superpowers: ["social"],
    },
    { name: "Baby Dabke",
      location: "Nazareth",
      description: "Traditional music and dance for children",
      photo: "photo URL",
      days: "Saturday",
      singlePrice: 40,
      termPrice: 200,
      maxChild: 20,
      minAge: 1,
      maxAge: 5,
      languages: ["Arabic", "English", "Hebrew"],
      superpowers: ["social"],
    }
  ]);
  return(
    <div> {events.map(event => (
    <Event name={event.name} location={event.location} description={event.description}
      photo={event.photo} days={event.days} singlePrice={event.singlePrice}
      termPrice={event.termPrice} maxChild={event.maxChild} minAge={event.minAge}
      maxAge={event.maxAge} languages={event.languages} superpowers={event.superpowers}
      key={event.key} />
  ))}
</div>
)
}

export default EventList;
