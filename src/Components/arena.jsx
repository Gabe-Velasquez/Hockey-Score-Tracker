import PropTypes from 'prop-types';

const Arena = ({team}) => {

return(
    <iframe
        title="Arena Map"
        width="600"
        height="450"
        style={{border:0}}
        loading="lazy"
        allowFullScreen={true}
        referrerPolicy="noReferrerWhenDowngrade"
        src={team.arenaAddress}>
    </iframe>
)
}

Arena.propTypes = {
  team: PropTypes.shape({
    arenaAddress: PropTypes.string.isRequired
  }).isRequired
};

export default Arena;
