import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Tickets = ({ team }) => {
  const API_KEY = import.meta.env.TICKET_API_KEY;
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    const baseURL = 'https://api.seatgeek.com/2/events';
    const dynamicURL = `${baseURL}?performers.slug=${encodeURIComponent(
      team.team
    )}&client_id=${API_KEY}`;

    axios
      .get(dynamicURL)
      .then((res) => {
        setTickets(res.data);
      })
      .catch((err) => console.log(err));
  }, [team.team, API_KEY]);

  return (
  <body className='text-center'>

  </body>
  );
};

Tickets.propTypes = {
    team: PropTypes.shape({
      team: PropTypes.string.isRequired,
    }).isRequired,
  };

export default Tickets;
