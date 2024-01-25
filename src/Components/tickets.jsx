import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Tickets = ({ team }) => {
  const API_KEY = import.meta.env.VITE_TICKET_API_KEY;
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    const baseURL = 'https://api.seatgeek.com/2/events';
    const teamSlug = encodeURIComponent(team.team.replace(/\s+/g, '-'));
    const dynamicURL = `${baseURL}?performers.slug=${teamSlug}&client_id=${API_KEY}`;
    console.log(dynamicURL);
    axios
      .get(dynamicURL)
      .then((res) => {
        console.log(res.data)
        setTickets(res.data.events);
      })
      .catch((err) => console.log(err));
  }, [team.team, API_KEY]) ;
  
  return (
    <div className='text-center'>
      
      <h4>Next Five Games</h4>
      {tickets.length > 0 ? (
        <div className="row justify-content-center">
        <ul>
          {tickets.slice(0, 5).map((event) => (
            <li key={event.id}>
              {/* Renders a clickable link for each event */}
              <a href={event.url} >
                {event.title}
              </a>
            </li>
          ))}
        </ul>
        </div>
      ) : (
        <p>No games scheduled...</p>
      )}
    </div>
  );
};

Tickets.propTypes = {
  team: PropTypes.shape({
    team: PropTypes.string.isRequired,
  }).isRequired,
};

export default Tickets;
