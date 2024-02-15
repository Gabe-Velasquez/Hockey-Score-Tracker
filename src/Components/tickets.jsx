import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Tickets = ({ team }) => {
  const API_KEY = import.meta.env.VITE_TICKET_API_KEY;
  console.log(`Ticket: ${API_KEY}`);
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    const baseURL = 'https://api.seatgeek.com/2/events';
    const teamSlug = encodeURIComponent(team.team.replace(/\s+/g, '-'));
    const dynamicURL = `${baseURL}?performers.slug=${teamSlug}&client_id=${API_KEY}`;
    console.log(dynamicURL);
    axios
    .get(dynamicURL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
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


// import axios from 'axios';
// import PropTypes from 'prop-types';
// import { useEffect, useState } from 'react';

// const Tickets = ({ team }) => {
//   const API_KEY = import.meta.env.VITE_TICKET_API_KEY;
//   const CLIENT_SECRET = import.meta.env.VITE_TICKET_CLIENT_SECRET;
//   const [tickets, setTickets] = useState([]);
//   const [accessToken, setAccessToken] = useState(null);
//   const [refreshToken, setRefreshToken] = useState(null);

//   // This function will get the access token and the refresh token from the SeatGeek API
//   const getTokens = async () => {
//     const tokenURL = 'https://api.seatgeek.com/oauth/token';
//     const redirectURI = 'http://localhost:3000'; // This should match the redirect URI that you registered on the SeatGeek Developers Page
//     const code = new URLSearchParams(window.location.search).get('code'); // This is the code that you get from the SeatGeek authorization page
//     try {
//       const res = await axios.post(tokenURL, {
//         client_id: API_KEY,
//         client_secret: CLIENT_SECRET,
//         grant_type: 'authorization_code',
//         redirect_uri: redirectURI,
//         code: code,
//       });
//       const { access_token, refresh_token } = res.data;
//       setAccessToken(access_token);
//       setRefreshToken(refresh_token);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // This function will refresh the access token using the refresh token
//   const refreshAccessToken = async () => {
//     const tokenURL = 'https://api.seatgeek.com/oauth/token';
//     try {
//       const res = await axios.post(tokenURL, {
//         client_id: API_KEY,
//         client_secret: CLIENT_SECRET,
//         grant_type: 'refresh_token',
//         refresh_token: refreshToken,
//       });
//       const { access_token } = res.data;
//       setAccessToken(access_token);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // This function will revoke the access token and the refresh token
//   const revokeTokens = async () => {
//     const revokeURL = 'https://api.seatgeek.com/oauth/revoke';
//     try {
//       await axios.post(revokeURL, {
//         client_id: API_KEY,
//         client_secret: CLIENT_SECRET,
//         token: accessToken,
//       });
//       await axios.post(revokeURL, {
//         client_id: API_KEY,
//         client_secret: CLIENT_SECRET,
//         token: refreshToken,
//       });
//       setAccessToken(null);
//       setRefreshToken(null);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // This function will fetch the tickets from the SeatGeek API using the access token
//   const getTickets = async () => {
//     const baseURL = 'https://api.seatgeek.com/2/events';
//     const teamSlug = encodeURIComponent(team.team.replace(/\s+/g, '-'));
//     const dynamicURL = `${baseURL}?performers.slug=${teamSlug}`;
//     try {
//       const res = await axios.get(dynamicURL, {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });
//       console.log(res.data);
//       setTickets(res.data.events);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // This will run once when the component mounts, and get the tokens from the SeatGeek API
//   useEffect(() => {
//     getTokens();
//   }, []);

//   // This will run whenever the access token changes, and fetch the tickets from the SeatGeek API
//   useEffect(() => {
//     if (accessToken) {
//       getTickets();
//     }
//   }, [accessToken]);

//   // This will create an axios interceptor that will refresh the access token if it expires or is revoked
//   useEffect(() => {
//     const interceptor = axios.interceptors.response.use(
//       (response) => response,
//       (error) => {
//         if (error.response.status === 401) {
//           // If the status code is 401, it means the access token is invalid
//           axios.interceptors.response.eject(interceptor); // Remove the interceptor to avoid infinite loop
//           return refreshAccessToken().then(() => {
//             // Refresh the access token and retry the request
//             error.config.headers.Authorization = `Bearer ${accessToken}`;
//             return axios(error.config);
//           });
//         }
//         return Promise.reject(error);
//       }
//     );
//     return () => {
//       // Remove the interceptor when the component unmounts
//       axios.interceptors.response.eject(interceptor);
//     };
//   }, [accessToken]);

//   return (
//     <div className='text-center'>
//       <h4>Next Five Games</h4>
//       {tickets.length > 0 ? (
//         <div className='row justify-content-center'>
//           <ul>
//             {tickets.slice(0, 5).map((event) => (
//               <li key={event.id}>
//                 {/* Renders a clickable link for each event */}
//                 <a href={event.url}>{event.title}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p>No games scheduled...</p>
//       )}
//       <button onClick={revokeTokens}>Revoke Access</button>
//     </div>
//   );
// };

// Tickets.propTypes = {
//   team: PropTypes.shape({
//     team: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default Tickets;
