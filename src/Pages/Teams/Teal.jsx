import Card from 'react-bootstrap/Card';
import teams from '../../utils/teams';
import renderSocialLinks from '../../Components/renderSocialLinks';
import PlayerTable from '../../Components/players';
import CupWins from '../../Components/cupWins';
import Tickets from '../../Components/tickets';
import Arena from '../../Components/arena';
export default function Teals() {
  // Never heard a sharks fan call them this... then again I only know one fan.
  const sanJoseSharks = teams.filter((team) => team.team === 'San Jose Sharks');
  return sanJoseSharks.map((team) => (
    <div key={team.team} className={team.teamStyle}>
      <Card style={{ width: '18rem' }} className='m-auto'>
        <Card.Body>
          <Card.Title className='text-center'>{team.team}</Card.Title>
          <Card.Text>
            Shark sirens blaring, fans roaring, prepare to dive into the
            electrifying waters of the San Jose Sharks! This team is a force of
            nature, blending speed, skill, and relentless pursuit with the bite
            of their namesake to create an unforgettable on-ice experience.
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
