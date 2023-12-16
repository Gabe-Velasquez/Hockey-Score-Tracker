import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTiktok, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
export default function BBB() {
  return (
    <div className='BOS'>
      <Card style={{ width: '18rem' }} className='Team-Card'>
        <Card.Body>
          <Card.Title>Welcome Bruins </Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </Card.Text>
          {/* Socials */}
          <Card.Link href='https://www.facebook.com/NHLBruins' rel='noreferrer' target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
              </Card.Link>
              <Card.Link href='https://www.instagram.com/nhlbruins' rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </Card.Link>
              <Card.Link href='https://www.tiktok.com/@nhlbruins' rel='noreferrer' target="_blank">
                <FontAwesomeIcon icon={faTiktok} />
              </Card.Link>
              <Card.Link href='https://www.youtube.com/user/TheNHLBruins' rel='noreferrer' target='_blank'>
                <FontAwesomeIcon icon={faYoutube} />
              </Card.Link>
              <Card.Link href="https://twitter.com/NHLBruins" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faXTwitter} />
              </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
