import Card from 'react-bootstrap/Card';
export default function Caps() {
  // Still rooting for Ovi scoring those goals!
  return (
    <div className='WSH'>
      <Card style={{ width: '18rem' }} className='Team-Card'>
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
          <Card.Link href='' rel='noreferrer' target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
              </Card.Link>
              <Card.Link href='https://www.instagram.com/seattlekraken/' rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </Card.Link>
              <Card.Link href='' rel='noreferrer' target="_blank">
                <FontAwesomeIcon icon={faTiktok} />
              </Card.Link>
              <Card.Link href='' rel='noreferrer' target='_blank'>
                <FontAwesomeIcon icon={faYoutube} />
              </Card.Link>
              <Card.Link href="https://twitter.com/SeattleKraken" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faXTwitter} />
              </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
