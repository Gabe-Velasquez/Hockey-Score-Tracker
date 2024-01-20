import Card from 'react-bootstrap/Card';
import teams from '../../utils/teams';
import renderSocialLinks from '../../utils/renderSocialLinks';
import PlayerTable from '../../utils/players';
import CupWins from '../../Components/cupWins';
export default function Monarchs() {
  const laKings = teams.filter((team) => team.team === 'Los Angeles Kings');
  return laKings.map((team) => (
    <div key={team.team} className={team.teamStyle}>
    <Card style={{ width: '18rem' }} className='m-auto'>
      <Card.Body>
        <Card.Title className='text-center'>{team.team}</Card.Title>
        <Card.Text>
        These Silver and Black warriors have been a force in the NHL since 1967, carving their legend with two Stanley Cup victories (2012, 2014) and electrifying play. From iconic names like Gretzky and Robitaille to the current Kings&apos; young guns, prepare to witness a team steeped in history and hungry for more. 
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
