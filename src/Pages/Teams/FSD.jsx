import Card from 'react-bootstrap/Card';
import teams from '../../utils/teams';
import renderSocialLinks from '../../Components/renderSocialLinks';
import PlayerTable from '../../Components/players';
import CupWins from '../../Components/cupWins';
import Tickets from '../../Components/tickets';
import Arena from '../../Components/arena';
export default function FSD() {
  // name does not stand for Full Self Driving like what I thought at first.
  const calgaryFlames = teams.filter((team) => team.team === 'Calgary Flames');
  return calgaryFlames.map((team) => (
    <div key={team.team} className={team.teamStyle}>
      <Card style={{ width: '18rem' }} className='team-container '>
        <Card.Body>
          <Card.Title className='text-center'>{team.team}</Card.Title>
          <Card.Text>
          Get ready for a stampede of excitement with the Calgary Flames! These Alberta-based firebrands have been heating up the ice since 1972, leaving a trail of scorching offense and passionate fans in their wake. Buckle up, because joining the Flames faithful is an experience you won&apos;t soon forget. 
          </Card.Text>
          <Card.Title className='text-center'>Stanley Cup Wins</Card.Title>
            <CupWins team={team} />
        </Card.Body>
        <Card.Body>
          <Card.Title className='text-center'>Notable Players</Card.Title>
          <PlayerTable team={team} />
        </Card.Body>
      </Card>

      <div className='Column-B'>
          <Card style={{ width: '18rem' }} className=''>
            <Card.Body>
              <Card.Title className='text-center display-6'>Find tickets to upcoming games!!</Card.Title>
              <Tickets team={team} />
              <Arena team={team} />
            </Card.Body>
          </Card>

          {/* <Card>
            <Arena team={team}/>
          </Card> */}
      </div>

      <div className='fixed-container'>
        <Card key={team.team} style={{ width: '80%' }} className='Team-Card'>
          <Card.Body style={{fontSize:'1.5rem',display:'flex', justifyContent:'space-around'}}>
            {/* Socials */}
            {renderSocialLinks(team)}
          </Card.Body>
        </Card>
      </div>
    </div>
  ));
}
