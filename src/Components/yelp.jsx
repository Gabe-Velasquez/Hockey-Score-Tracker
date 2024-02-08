import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Yelp = ({ team }) => {
  const API_KEY = import.meta.env.VITE_YELP_KEY;
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    const baseURL = 'https://api.yelp.com/v3/businesses/search';
    const teamSlug = encodeURIComponent(team.team.replace(/\s+/g, '-'));
    const dynamicURL = `${baseURL}?performers.slug=${teamSlug}&client_id=${API_KEY}`;
    console.log(dynamicURL);
    axios
      .get(dynamicURL)
      .then((res) => {
        console.log(res.data)
        setRestaurants(res.data.events);
      })
      .catch((err) => console.log(err));
  }, [team.team, API_KEY]) ;
  
  return (
    <div className='text-center'>
      
      <h4>Food Nearby</h4>
      {restaurants.length > 0 ? (
        <div className="row justify-content-center">
        <ul>
          {restaurants.slice(0, 5).map((event) => (
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
        <p>Nothing found nearby... hopefully the arena has good food.</p>
      )}
    </div>
  );
};

Yelp.propTypes = {
  team: PropTypes.shape({
    team: PropTypes.string.isRequired,
  }).isRequired,
};

export default Yelp;
