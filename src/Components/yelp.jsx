import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Yelp = ({ team }) => {
  const API_KEY = import.meta.env.VITE_YELP_KEY;
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    const baseURL = 'https://api.yelp.com/v3/businesses/search?';
    const addressSlug = encodeURIComponent(
      team.arenaAddress.replace(/\s+/g, '-')
    );
    const dynamicURL = `${baseURL}location=${addressSlug}&radius=5000&&limit=3&client_id=${API_KEY}`;
    console.log(dynamicURL);
    axios
      .get(dynamicURL, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setRestaurants(res.data.events);
      })
      .catch((err) => console.log(err));
  }, [team.arenaAddress, API_KEY]);

  return (
    <div className='text-center'>
      <h4>Food Nearby</h4>
      {restaurants.length > 0 ? (
        <div className='row justify-content-center'>
          <ul>
            {restaurants.slice(0, 5).map((restaurant) => (
              <li key={restaurant.id}>
                {/* Renders a clickable link for each restaurant */}
                <a href={restaurant.url}>
                  <img src={restaurant.image_url} alt={restaurant.name} />
                  {restaurant.name}
                  {restaurant.rating} ⭐{restaurant.price}
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
    arenaAddress: PropTypes.string.isRequired,
  }).isRequired,
};

export default Yelp;
