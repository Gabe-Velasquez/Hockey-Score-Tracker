import Card  from 'react-bootstrap/Card';
export default function Knights(){
    // Not to be confused by the Bic product but those tiny birds with tuxedos 
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Welcome </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    )
}