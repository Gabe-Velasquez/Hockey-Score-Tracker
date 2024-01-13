// const PlayerTable = ({team}) => {
//   console.log('Team data:', team);
//   const players = [];
//   for (let i = 1; i <= 12; i++) {
//     if (Object.prototype.hasOwnProperty.call(team,`player${i}`) && Object.prototype.hasOwnProperty.call(team,`years${i}`)){
//       players.push({
//         name: team[`player${i}`],
//         years: team[`years${i}`]
//       });
//     }
//   }
//   console.log('Players array:', players);

//   return (
//     <table className='text-center'>
//       <thead>
//         <tr>
//           <th>Player</th>
//           <th>Years at Club</th>
//         </tr>
//       </thead>
//       <tbody>
//         {players.map((player, index) => (
//           <tr key={index}>
//             <td>{player.name}</td>
//             <td>{player.years}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };
// export default PlayerTable;

import PropTypes from 'prop-types';

const PlayerTable = ({ team }) => {
  console.log('Team data:', team);
  const players = [];
  for (let i = 1; i <= 12; i++) {
    if (
      Object.prototype.hasOwnProperty.call(team, `player${i}`) &&
      Object.prototype.hasOwnProperty.call(team, `years${i}`)
    ) {
      players.push({
        name: team[`player${i}`],
        years: team[`years${i}`],
      });
    }
  }
  console.log('Players array:', players);

  return (
    <table className='text-center'>
      <thead>
        <tr>
          <th>Player</th>
          <th>Years at Club</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) => (
          <tr key={index}>
            <td>{player.name}</td>
            <td>{player.years}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

PlayerTable.propTypes = {
  team: PropTypes.shape({
    player1: PropTypes.string,
    years1: PropTypes.string,
    // Add PropTypes for other players and years as needed
  }).isRequired,
};

export default PlayerTable;
