import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Tickets = ({ team }) => {
  const API_KEY = import.meta.env.VITE_TICKET_API_KEY;
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    const baseURL = 'https://api.seatgeek.com/2/events';
    const dynamicURL = `${baseURL}?performers.slug=${encodeURIComponent(
      team.team
    )}&client_id=${API_KEY}`;
    console.log(dynamicURL)
    axios
      .get(dynamicURL)
      .then((res) => {
        setTickets(res.data);
      })
      .catch((err) => console.log(err));
  }, [team.team, API_KEY]);

  return (
    <body className='text-center'>
      <h2>Next Five Events</h2>
      {tickets.length > 0 ? (
        <ul>
          {tickets.slice(0, 5).map((event) => (
            <li key={event.id}>
              {/* Renders a clickable link for each event */}
              <a href={event.url} target="_blank" rel="noopener noreferrer">
                {event.title}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </body>
  );
};

Tickets.propTypes = {
  team: PropTypes.shape({
    team: PropTypes.string.isRequired,
  }).isRequired,
};

export default Tickets;
