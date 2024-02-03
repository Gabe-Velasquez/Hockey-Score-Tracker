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
