import Card from 'react-bootstrap/Card';
import teams from '../../utils/teams'
import renderSocialLinks from '../../utils/renderSocialLinks';
export default function Sens() {
  // Not to be confused by the Bic product but those tiny birds with tuxedos
  const ottawaSenators=teams.filter((team)=>team.team==='Ottawa Senators');
  return (
    <div className='OTT'>
      {ottawaSenators.map((team)=>(
      <Card key={team.team} style={{ width: '18rem' }} className='Team-Card'>
        <Card.Body>
          <Card.Title>Welcome </Card.Title>
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
