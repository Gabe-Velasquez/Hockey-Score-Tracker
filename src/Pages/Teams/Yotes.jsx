import Card from 'react-bootstrap/Card';
import teams from '../../utils/teams';
import renderSocialLinks from '../../Components/renderSocialLinks';
import PlayerTable from '../../Components/players';
import CupWins from '../../Components/cupWins';
import Tickets from '../../Components/tickets';
import Arena from '../../Components/arena';
export default function Yotes() {
  const arizonaCoyotes = teams.filter(
    (team) => team.team === 'Arizona Coyotes');
  return arizonaCoyotes.map((team) => (
    <div key={team.team} className={team.teamStyle}>
      <Card style={{ width: '18rem' }} className='m-auto'>
        <Card.Body>
          <Card.Title className='text-center'>{team.team} INACTIVE</Card.Title>
          <Card.Text>
            The Arizona Coyotes were an ice hockey team based in the Phoenix metropolitan area. They were members of the National Hockey League&apos;s (NHL) Central Division. The team was founded in 1996 as the Phoenix Coyotes, and they changed their name to the Arizona Coyotes in 2014. The team has moved to Utah in 2024. To be honest, not sure how you got to this webpage but congrats!            
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
