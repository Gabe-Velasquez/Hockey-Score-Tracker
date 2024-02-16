import Card from 'react-bootstrap/Card';
import teams from '../../utils/teams';
import renderSocialLinks from '../../Components/renderSocialLinks';
import PlayerTable from '../../Components/players';
import CupWins from '../../Components/cupWins';
import Tickets from '../../Components/tickets';
import Arena from '../../Components/arena';
import Yelp from '../../Components/yelp';
export default function Avs() {
  // And now the Rocky Mountain Extremes.... nvm Colorado Avalanche
  const coloradoAvalanche = teams.filter(
    (team) => team.team === 'Colorado Avalanche'
  );
  return coloradoAvalanche.map((team) => (
    <div key={team.team} className={team.teamStyle}>
      <div className='mx-auto mt-4 d-flex justify-content-between'>
      <Card style={{ width: '26rem' }} className='m-auto'>
        <Card.Body>
          <Card.Title className='text-center display-5 text-decoration-underline'>{team.team}</Card.Title>
          <Card.Text>
            The Colorado Avalanche are from Denver, Colorado and have been
            playing there for since 1995. Before then, they were called the
            Quebec Nordiques. This hockey club has won 3 Stanley Cups in their
            history.
          </Card.Text>
          <Card.Title className='text-center display-6'>Stanley Cup Wins</Card.Title>
          <CupWins team={team} />
        </Card.Body>
        <Card.Body>
          <Card.Title className='text-center display-6'>Notable Players</Card.Title>
          <PlayerTable team={team} className='text-center'/>
        </Card.Body>
      </Card>
      
        <div className='m-auto mt-6'>
          <Card style={{ width: '30rem' }} className='m-auto mt-3'>
            <Card.Body>
              <Card.Title className='text-center display-6'>Find tickets to upcoming games!!</Card.Title>
              <Tickets team={team} />
            </Card.Body>
          </Card>

          <Card>
            <Arena team={team}/>
          </Card>
          <Card>
            <Yelp team={team} />
          </Card>
        </div>
      </div>

      <div> 
      <Card key={team.team} style={{ width: '80%' }} className='Team-Card'>
        <Card.Body
          style={{
            fontSize: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          {/* Socials */}
          {renderSocialLinks(team)}
        </Card.Body>
      </Card>
      </div>
    </div>
  ));
}
