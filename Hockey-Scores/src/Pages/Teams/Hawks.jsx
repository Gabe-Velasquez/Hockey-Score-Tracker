import Card from 'react-bootstrap/Card';
import teams from '../../utils/teams';
import renderSocialLinks from '../../utils/renderSocialLinks';
import PlayerTable from '../../utils/players';
import CupWins from '../../utils/cupWins';
export default function Hawks() {
  // No, this is not from the first Mighty Ducks movie... one of the original six teams!
  const chicagoBlackhawks = teams.filter(
    (team) => team.team === 'Chicago Blackhawks'
  );
  return chicagoBlackhawks.map((team) => (
    <div key={team.team} className={team.teamStyle}>
      <Card style={{ width: '18rem' }} className='m-auto'>
        <Card.Body>
          <Card.Title className='text-center'>{team.team}</Card.Title>
          <Card.Text>
            The Colorado Avalanche are from Denver, Colorado and have been
            playing there for since 1995. Before then, they were called the
            Quebec Nordiques. This hockey club has won 3 Stanley Cups in their
            history.
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
          {/* Currently doing research for ticketmaster and stubhub APIs  */}
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
