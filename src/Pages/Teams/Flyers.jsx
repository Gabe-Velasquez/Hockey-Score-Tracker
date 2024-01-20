import Card from 'react-bootstrap/Card';
import teams from '../../utils/teams';
import renderSocialLinks from '../../utils/renderSocialLinks';
import PlayerTable from '../../utils/players';
import CupWins from '../../Components/cupWins';
export default function Flyers() {
  // Flyers is shorter than their nicknames....
  const philadelphiaFlyers = teams.filter(
    (team) => team.team === 'Philadelphia Flyers'
  );
  return philadelphiaFlyers.map((team) => (
    <div key={team.team} className={team.teamStyle}>
    <Card style={{ width: '18rem' }} className='m-auto'>
      <Card.Body>
        <Card.Title className='text-center'>{team.team}</Card.Title>
        <Card.Text>
        Buckle up for a wild ride, because the Philadelphia Flyers are about to take you on a journey through grit, grace, and the unyielding spirit of &quot;Broad Street Bully&quot; hockey! Founded in 1967, these orange and black warriors have been a thorn in the side of opponents and a source of immense pride for Philly fans ever since. 
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
