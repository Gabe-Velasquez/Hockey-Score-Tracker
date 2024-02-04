import Card from 'react-bootstrap/Card';
import teams from '../../utils/teams';
import renderSocialLinks from '../../Components/renderSocialLinks';
import PlayerTable from '../../Components/players';
import CupWins from '../../Components/cupWins';
import Tickets from '../../Components/tickets';
import Arena from '../../Components/arena';
export default function Kraken() {
  const seattleKraken = teams.filter((team) => team.team === 'Seattle Kraken');
  return seattleKraken.map((team) => (
    <div key={team.team} className={team.teamStyle}>
      <Card style={{ width: '18rem' }} className='m-auto'>
        <Card.Body>
          <Card.Title className='text-center'>{team.team}</Card.Title>
          <Card.Text>
          Ahoy there, matey! Buckle up for a deep dive into the mysteries of the deep and the electrifying Seattle Kraken! Born in 2021, this Pacific Northwest crew is still young, but they&apos;re making waves in the NHL with their vibrant fanbase, thrilling play, and iconic sea creature mascot.
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
        <Card.Body
          style={{
            fontSize: '1.5rem',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          {/* Socials */}
          {renderSocialLinks(team)}
        </Card.Body>
      </Card>
    </div>
  ));
}
