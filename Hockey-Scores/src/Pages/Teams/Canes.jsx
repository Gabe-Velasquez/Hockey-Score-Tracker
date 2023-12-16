import Card from 'react-bootstrap/Card';
export default function Canes() {
  return (
    <div className='CAR'>
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
        </Card.Body>
      </Card>
    </div>
  );
}
