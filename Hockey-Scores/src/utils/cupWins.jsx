import PropTypes from 'prop-types';

const CupWins = ({ team }) => {
  console.log('Team data:', team);

  const wins = [];
  for (let i = 1; i <= 50; i++) {
    if (
      Object.prototype.hasOwnProperty.call(team, `cupWin${i}`) 
    ) {
      wins.push({
        year: team[`cupWin${i}`],
      });
    }
  }

  return (
    <table className='text-center'>
      <tbody>
        {wins.length > 0 ? (
          wins.map((year, index) => (
            <tr key={index}>
              <td>{year.year}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td>No Stanley Cup wins yet.</td>
          </tr>
        )}
      </tbody>
    </table>
  ); 
}; 

CupWins.propTypes = {
  team: PropTypes.shape({
    cupWin: PropTypes.string,  // PropType for cupWin (lowercase)
    // Add PropTypes for other players and years as needed
  }).isRequired,
};

export default CupWins;

