import Card from 'react-bootstrap/Card';
import teams from '../../utils/teams';
import renderSocialLinks from '../../Components/renderSocialLinks';
import PlayerTable from '../../Components/players';
import CupWins from '../../Components/cupWins'
import Tickets from '../../Components/tickets';
import Arena from '../../Components/arena';
export default function Knights() {
  const vegasGoldenKnights = teams.filter(
    (team) => team.team === 'Vegas Golden Knights'
  );
  return vegasGoldenKnights.map((team) => (
    <div key={team.team} className={team.teamStyle}>
      <Card style={{ width: '18rem' }} className='m-auto'>
        <Card.Body>
          <Card.Title className='text-center'>{team.team}</Card.Title>
          <Card.Text>
          These desert warriors, born in 2017 as the NHL&apos;s newest expansion team, have taken the league by storm in just a few short years. From a magical inaugural season that saw them reach the Stanley Cup finals, to their consistent playoff appearances and captivating style of play, the Golden Knights have become a force to be reckoned with.
          </Card.Text>
          <Card.Title className='text-center'>Stanley Cup Wins</Card.Title>
            <CupWins team={team} />
        </Card.Body>
        <Card.Body>
          <Card.Title className='text-center'>Notable Players</Card.Title>
          <PlayerTable team={team} />
        </Card.Body>
      </Card>

      <div>
          <Card style={{ width: '18rem' }} className='m-auto mt-3'>
            <Card.Body>
              <Card.Title className='text-center display-6'>Find tickets to upcoming games!!</Card.Title>
              <Tickets team={team} />
            </Card.Body>
          </Card>

          <Card>
            <Arena team={team}/>
          </Card>
        </div>

      <Card key={team.team} style={{ width: '80%' }} className='Team-Card'>
        <Card.Body style={{fontSize:'1.5rem',display:'flex', justifyContent:'space-around'}}>
          {/* Socials */}
          {renderSocialLinks(team)}
        </Card.Body>
      </Card>
    </div>
  ));
}
