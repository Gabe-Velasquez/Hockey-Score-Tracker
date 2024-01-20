import Card from 'react-bootstrap/Card';
import teams from '../../utils/teams';
import renderSocialLinks from '../../utils/renderSocialLinks';
import PlayerTable from '../../utils/players';
import CupWins from '../../Components/cupWins';
export default function Oil() {
  //Which Wonder Twin will be the first to leave?
  const edmontonOilers = teams.filter(
    (team) => team.team === 'Edmonton Oilers'
  );
  return edmontonOilers.map((team) => (
    <div key={team.team} className={team.teamStyle}>
      <Card style={{ width: '18rem' }} className='m-auto'>
        <Card.Body>
          <Card.Title className='text-center'>{team.team}</Card.Title>
          <Card.Text>
            
Buckle up, Oilers fans, because we're about to rocket into the high-octane world of the Edmonton Oilers! This team is synonymous with electrifying speed, offensive fireworks, and a passionate fanbase that bleeds orange and blue. 
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
