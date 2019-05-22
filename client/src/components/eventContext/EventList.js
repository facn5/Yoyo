import React, { useContext } from 'react';
import Event from './Event';
import { EventContext } from './EventContext';

const EventList = () => {
  const [events, setEvents] = useContext(EventContext)
  return(
    <div> {events.map(event => (
      <Event name={event.name} location={event.location}
        description={event.description} photo={event.photo} days={event.days}
        singlePrice={event.singlePrice} termPrice={event.termPrice}
        maxChild={event.maxChild} minAge={event.minAge} maxAge={event.maxAge}
        languages={event.languages} superpowers={event.superpowers} />
      ))}
    </div>
  );
}

export default EventList;
