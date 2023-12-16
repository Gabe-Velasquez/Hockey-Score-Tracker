import Card  from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTiktok, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
export default function Avs(){
    // And now the Rocky Mountain Extremes.... nvm Colorado Avalanche
    return(
      <div className='COL'>
        <Card style={{ width: '18rem' }} className='Team-Card' >
          <Card.Body>
            <Card.Title>Welcome AVALANCHE FANS!!! </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the content.
            </Card.Text>
          {/* Socials */}
          <Card.Link href='https://www.facebook.com/coloradoavalanche' rel='noreferrer' target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
              </Card.Link>
              <Card.Link href='https://www.instagram.com/coloradoavalanche/' rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </Card.Link>
              <Card.Link href='https://www.tiktok.com/@coloradoavalanche' rel='noreferrer' target="_blank">
                <FontAwesomeIcon icon={faTiktok} />
              </Card.Link>
              <Card.Link href='https://www.youtube.com/user/AvalancheNHL' rel='noreferrer' target='_blank'>
                <FontAwesomeIcon icon={faYoutube} />
              </Card.Link>
              <Card.Link href="https://twitter.com/Avalanche" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faXTwitter} />
              </Card.Link>
          </Card.Body>
        </Card>
      </div>
    )
}