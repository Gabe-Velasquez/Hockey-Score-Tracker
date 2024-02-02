import Card from 'react-bootstrap/Card';
import teams from '../../utils/teams';
import renderSocialLinks from '../../Components/renderSocialLinks';
import PlayerTable from '../../Components/players';
import CupWins from '../../Components/cupWins';
import Tickets from '../../Components/tickets';
export default function Notes() {
  //The Blue Notes... 9 hours from West Virginia but they always sing this song....
  const stLouisBlues = teams.filter((team) => team.team === 'St. Louis Blues');
  return stLouisBlues.map((team) => (
    <div key={team.team} className={team.teamStyle}>
    <Card style={{ width: '18rem' }} className='m-auto'>
      <Card.Body>
        <Card.Title className='text-center'>{team.team}</Card.Title>
        <Card.Text>
        Buckle up, Blues faithful, for a ride on the &quot;Gloria&quot; express! The St. Louis Blues, a team steeped in bluesy vibes and gritty determination, have been painting the ice blue since 1967. From their soulful Stanley Cup victory in 2019 to their electrifying offense and passionate fanbase, the Blues are sure to leave you singing their praises. 
        </Card.Text>
        <Card.Title className='text-center'>Stanley Cup Wins</Card.Title>
          <CupWins team={team} />
      </Card.Body>
      <Card.Body>
        <Card.Title className='text-center'>Notable Players</Card.Title>
        <PlayerTable team={team} />
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className='m-auto'>
      <Card.Body>
        <Card.Title className='text-center'>Upcoming Games</Card.Title>
        {/* Looking through scoring API to target soonest games for certain games and returning based on team playing, could probably make this a loop and dynamically iterate based on team.  */}
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className='m-auto'>
      <Card.Body>
        <Card.Title className='text-center'>Find Tickets!!</Card.Title>
        <Tickets team={team} />
      </Card.Body>
    </Card>

    <Card key={team.team} style={{ width: '80%' }} className='Team-Card'>
      <Card.Body style={{fontSize:'1.5rem',display:'flex', justifyContent:'space-around'}}>
        {/* Socials */}
        {renderSocialLinks(team)}
      </Card.Body>
    </Card>
  </div>
));
}
