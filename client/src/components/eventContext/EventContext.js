import React, {useState, createContext} from 'react';

export const EventContext = createContext();

export const EventProvider = (props) => {
  const [events, setEvents] = useState([
    { name: "Paintball in the Forest",
    location: "State Park",
    description: "A wild time in the forest with paintball.",
    photo: "photo URL",
    days: "Friday",
    singlePrice: 100,
    termPrice: 500,
    maxChild: 30,
    minAge: 14,
    maxAge: 25,
    languages: ["Arabic", "English", "Hebrew"],
    superpowers: ["sports", "social"],
    }
  ]);
  return(<EventContext.Provider value={[events, setEvents]}>{props.children}
  </EventContext.Provider>);
}
