import Card from 'react-bootstrap/Card';
import teams from '../../utils/teams';
import renderSocialLinks from '../../Components/renderSocialLinks';
import PlayerTable from '../../Components/players';
import CupWins from '../../Components/cupWins';
import Tickets from '../../Components/tickets';
export default function Jets() {
  // YOOOUUURRRRR PHEONIX... i mean, WINNIPEG JETS!
  const winnipegJets = teams.filter((team) => team.team === 'Winnipeg Jets');
  return winnipegJets.map((team) => (
    <div key={team.team} className={team.teamStyle}>
      <Card style={{ width: '18rem' }} className='m-auto'>
        <Card.Body>
          <Card.Title className='text-center'>{team.team}</Card.Title>
          <Card.Text>
          Born twice, the Jets are a team steeped in rich history and passionate fandom. Founded in 1972, they blazed a trail in the WHA and NHL with legends like Bobby Hull and Teemu Selanne, even reaching the Stanley Cup Finals in 1979.
          Sadly, financial woes forced their relocation to Phoenix in 1996, leaving a gaping hole in Winnipeg&apos;s heart. But fear not, for in 2011, the Jets soared back onto the scene through the relocation of the Atlanta Thrashers. The city erupted in joy, welcoming their beloved team home with open arms. 
 
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
