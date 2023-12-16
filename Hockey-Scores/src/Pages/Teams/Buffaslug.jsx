import Card from 'react-bootstrap/Card';
import teams from '../../utils/teams'
import renderSocialLinks from '../../utils/renderSocialLinks';
export default function Buffaslug() {
  const buffaloSabres = teams.filter((team) => team.team === "Buffalo Sabres");
  return (
    <div className='BUF'>
      {buffaloSabres.map((team)=>(
      <Card key={team.team} style={{ width: '18rem' }} className='Team-Card'>
        <Card.Body>
          <Card.Title>Welcome {team.team} FANS!!!  </Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </Card.Text>
          {/* Socials */}
          {renderSocialLinks(team)}
          {/* <Card.Link href='https://www.facebook.com/BuffaloSabres' rel='noreferrer' target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
              </Card.Link>
              <Card.Link href='https://www.instagram.com/buffalosabres' rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </Card.Link>
              <Card.Link href='https://www.tiktok.com/@buffalosabres' rel='noreferrer' target="_blank">
                <FontAwesomeIcon icon={faTiktok} />
              </Card.Link>
              <Card.Link href='https://www.youtube.com/user/SabresSocialMedia' rel='noreferrer' target='_blank'>
                <FontAwesomeIcon icon={faYoutube} />
              </Card.Link>
              <Card.Link href="https://twitter.com/BuffaloSabres" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faXTwitter} />
              </Card.Link> */}
        </Card.Body>
      </Card>
           ))}
    </div>
  );
}
