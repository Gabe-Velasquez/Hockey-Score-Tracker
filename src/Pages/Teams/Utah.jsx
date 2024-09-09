import Card from 'react-bootstrap/Card';
import teams from '../../utils/teams';
import renderSocialLinks from '../../Components/renderSocialLinks';
import PlayerTable from '../../Components/players';
import CupWins from '../../Components/cupWins';
import Tickets from '../../Components/tickets';
import Arena from '../../Components/arena';
export default function Utah() {
  //New team, who dis?
  const utahHC = teams.filter((team) => team.team === 'Utah Hockey Club');
  return utahHC.map((team) => (
    <div key={team.team} className={`${team.teamStyle} team-container`}>
      <Card style={{ width: '18rem' }} className='team-container '>
        <Card.Body>
          <Card.Title className='text-center'>{team.team}</Card.Title>
          <Card.Text>
            The Utah Hockey Club, a brand-new franchise joining the National Hockey League (NHL) for the 2024-2025 season, is poised to bring a fresh wave of excitement and competition to the world of professional ice hockey. 
            Hailing from the vibrant state of Utah, this team is eager to establish its identity and captivate fans with its dynamic style of play. As a newcomer to the NHL, the Utah Hockey Club will have the opportunity to build a strong foundation and forge a unique path for its future.
          </Card.Text>
          <hr></hr>
          <Card.Title className='text-center'>Stanley Cup Wins</Card.Title>
            <CupWins team={team} />
          <hr></hr>
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
