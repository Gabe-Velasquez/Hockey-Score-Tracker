import PropTypes from 'prop-types';

const CupWins = ({ team }) => {
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
    <div className='text-center'>
        {wins.length > 0 ? (
          wins.map((year, index) => (
            <h5 key={index}>
              {year.year}
            </h5>
          ))
        ) : (
            <img src="http://www.quickmeme.com/img/01/0149f3c3306cc271a7907059fa47e125edf246fecf298c2981f55154e4e4adee.jpg" alt="No Cups" width={250}/>
        )}
      
    </div>
  ); 
}; 

CupWins.propTypes = {
  team: PropTypes.shape({
    cupWin: PropTypes.string,  // PropType for cupWin (lowercase)
  }).isRequired,
};

export default CupWins;

