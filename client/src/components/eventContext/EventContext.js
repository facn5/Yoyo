import React, {useState, createContext} from 'react';

export const EventContext = createContext();

export const EventProvider = (props) => {
  const [events, setEvents] = useState([
    {
      name: "Saifuddin Jones",
      password: 12345678,
      phone: 55512345,
      email: "john@email.com",
      arabic: true,
      english: true,
      hebrew: true,
      russian: false,
      sports: true,
      art: false,
      computers: true,
      music: false,
      social: true
    }
  ]);
  return(<EventContext.Provider value={[events, setEvents]}>{props.children}
  </EventContext.Provider>);
}
