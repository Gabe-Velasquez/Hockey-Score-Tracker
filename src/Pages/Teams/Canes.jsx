import Card from 'react-bootstrap/Card';
import teams from '../../utils/teams';
import renderSocialLinks from '../../Components/renderSocialLinks';
import PlayerTable from '../../Components/players';
import CupWins from '../../Components/cupWins';
import Tickets from '../../Components/tickets';
import Arena from '../../Components/arena';
export default function Canes() {
  const carolinaHurricanes = teams.filter(
    (team) => team.team === 'Carolina Hurricanes'
  );
  return carolinaHurricanes.map((team) => (
    <div key={team.team} className={team.teamStyle}>
      <Card style={{ width: '18rem' }} className='m-auto'>
        <Card.Body>
          <Card.Title className='text-center'>{team.team}</Card.Title>
          <Card.Text>
          Buckle up for a whirlwind ride with the Carolina Hurricanes, a team that brings Southern charm and downright fierce talent to the ice! Born in 1971 as the New England Whalers, these &quot;Canes&quot; migrated south in 1997, bringing their electrifying brand of hockey to the heart of Raleigh, North Carolina.
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

