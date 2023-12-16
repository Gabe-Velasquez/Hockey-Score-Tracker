import Card  from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTiktok, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Kraken(){
    return(
      <div className='SEA'>
        <div className='team-container'>
          <Card style={{ width: '50rem' }} className='Team-Card'>
            <Card.Body>
              <Card.Title>Welcome </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the content.
              </Card.Text>

              {/* Socials */}
              <Card.Link href='https://www.facebook.com/seattlekraken' rel='noreferrer' target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
              </Card.Link>
              <Card.Link href='https://www.instagram.com/seattlekraken/' rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </Card.Link>
              <Card.Link href='https://www.tiktok.com/@seattlekraken' rel='noreferrer' target="_blank">
                <FontAwesomeIcon icon={faTiktok} />
              </Card.Link>
              <Card.Link href='https://www.youtube.com/SeattleKraken' rel='noreferrer' target='_blank'>
                <FontAwesomeIcon icon={faYoutube} />
              </Card.Link>
              <Card.Link href="https://twitter.com/SeattleKraken" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faXTwitter} />
              </Card.Link>
              
            </Card.Body>
          </Card>
        </div>
      </div>
    )
}