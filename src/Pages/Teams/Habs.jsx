import Card from 'react-bootstrap/Card';
import renderSocialLinks from '../../utils/renderSocialLinks';
import PlayerTable from '../../utils/players';
import teams from '../../utils/teams';
import CupWins from '../../Components/cupWins';

export default function Habs() {
  const montrealCanadiens = teams.filter(
    (team) => team.team === 'Montreal Canadiens'
  );
  return montrealCanadiens.map((team) => (
    <div key={team.team} className={team.teamStyle}>
      <Card style={{ width: '18rem' }} className='m-auto'>
        <Card.Body>
          <Card.Title className='text-center'>{team.team}</Card.Title>
          <Card.Text>
          Founded in 1909, the Canadiens are the oldest continuously operating professional hockey team in the world, and let me tell you, they&apos;ve racked up quite the trophy case in their 115-year history. 
          They&apos;re a cultural touchstone in Montreal, Quebec, and even all of Canada. The bleu-blanc-rouge jerseys are instantly recognizable, and the &quot;Olé, Olé, Olé&quot; chant that rings through the Bell Centre can send shivers down your spine.
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
