import Card from 'react-bootstrap/Card';
import teams from '../../utils/teams'
import renderSocialLinks from '../../utils/renderSocialLinks';
export default function Canes() {
  const carolinaHurricanes = teams.filter((team)=>team.team==='Carolina Hurricanes');
  return (
    <div className='CAR'>
      {carolinaHurricanes.map((team)=>(
      <Card key={team.team}style={{ width: '18rem' }} className='Team-Card'>
        <Card.Body>
          <Card.Title>Welcome {team.team} FANS!!! </Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </Card.Text>
          {/* Socials */}
          {renderSocialLinks(team)}
        </Card.Body>
      </Card>
      ))}
    </div>
  );
}
