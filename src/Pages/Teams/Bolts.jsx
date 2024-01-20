import Card from 'react-bootstrap/Card';
import teams from '../../utils/teams';
import renderSocialLinks from '../../utils/renderSocialLinks';
import PlayerTable from '../../utils/players';
import CupWins from '../../Components/cupWins';
export default function Bolts() {
  const tampaBayLightning = teams.filter(
    (team) => team.team === 'Tampa Bay Lightning'
  );
  return tampaBayLightning.map((team) => (
    <div key={team.team} className={team.teamStyle}>
    <Card style={{ width: '18rem' }} className='m-auto'>
      <Card.Body>
        <Card.Title className='text-center'>{team.team}</Card.Title>
        <Card.Text>
        Born in 1992, the Lightning weren&apos;t just new to the NHL, they were new to Florida itself. Yet, this young franchise quickly harnessed the Sunshine State&apos;s vibrant energy, building a dynasty fueled by talent and tenacity. Three Stanley Cups in two decades – they&apos;re not just &quot;striking,&quot; they&apos;re rewriting the record books! 
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

