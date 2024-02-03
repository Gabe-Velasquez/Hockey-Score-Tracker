import PropTypes from 'prop-types';

const Arena = ({team}) => {
const VITE_MAPS_KEY = import.meta.env.VITE_MAPS_KEY;
return(
    <iframe
  width="600"
  height="450"
  frameBorder="0" 
  style={{border:0}}
  src={`https://www.google.com/maps/embed/v1/place?key=${VITE_MAPS_KEY}&q=${encodeURIComponent(team.arena)}`} 
  allowFullScreen>
</iframe>

)
}

Arena.propTypes = {
  team: PropTypes.shape({
    arena: PropTypes.string.isRequired,
    arenaAddress: PropTypes.string.isRequired
  }).isRequired,
  VITE_MAPS_KEY: PropTypes.string.isRequired
};

export default Arena;

// import { useEffect } from 'react';
// import PropTypes from 'prop-types';

// const Arena = ({ team }) => {
//     const VITE_MAPS_KEY = import.meta.env.VITE_MAPS_KEY;

//     useEffect(() => {
        
//         // Load Google Maps JavaScript API script
//         const script = document.createElement('script');
//         script.src = `https://maps.googleapis.com/maps/api/js?key=${VITE_MAPS_KEY}&callback=initMap`;
//         script.async = true;
//         script.defer = true;
//         document.body.appendChild(script);

//         // Cleanup function
//         return () => {
//             document.body.removeChild(script);
//             delete window.initMap;
//         };
//     }, [VITE_MAPS_KEY]);

//     // Function to initialize the map
//     window.initMap = () => {
//         new window.google.maps.Map(document.getElementById('map'), {
//             center: { lat: 0, lng: 0 },
//             zoom: 8
//         });
//     };

//     return (
//         <div>
//             <h2>{team.arena}</h2>
//             <div id="map" style={{ width: '600px', height: '450px', border: '0' }}></div>
//         </div>
//     );
// };

// Arena.propTypes = {
//     team: PropTypes.shape({
//         arena: PropTypes.string.isRequired
//     }).isRequired
// };

// export default Arena;

// import { useEffect } from 'react';
// import PropTypes from 'prop-types';

// const Arena = ({ team }) => {
//     useEffect(() => {
//         const VITE_MAPS_KEY = import.meta.env.VITE_MAPS_KEY;

//         // Load Google Maps JavaScript API script
//         const script = document.createElement('script');
//         script.src = `https://maps.googleapis.com/maps/api/js?key=${VITE_MAPS_KEY}&callback=initMap`;
//         script.async = true;
//         script.defer = true;
//         document.body.appendChild(script);

//         // Cleanup function
//         return () => {
//             document.body.removeChild(script);
//             delete window.initMap;
//         };
//     }, []);

//     // Function to initialize the map
//     window.initMap = () => {
//         // Assuming team.arena is a valid address or location
//         const geocoder = new window.google.maps.Geocoder();
//     geocoder.geocode({ address: team.arena }, (results, status) => {
//         if (status === 'OK') {
//             new window.google.maps.Map(document.getElementById('map'), {
//                 center: results[0].geometry.location,
//                 zoom: 17
//             });
//         } else {
//             console.error('Geocode was not successful for the following reason: ', status);
//         }
//     });
//     };

//     return (
//         <div>
//             <h2 className='text-center'>{team.arena}</h2>
//             <div id="map" style={{ width: '600px', height: '450px', border: '0' }}></div>
//         </div>
//     );
// };

// Arena.propTypes = {
//     team: PropTypes.shape({
//         arena: PropTypes.string.isRequired
//     }).isRequired
// };

// export default Arena;

