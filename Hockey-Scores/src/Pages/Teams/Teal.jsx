import Card from 'react-bootstrap/Card';
export default function Teals() {
  // Never heard a sharks fan call them this... then again I only know one fan.
  return (
    <div className='SJS'>
    <Card style={{ width: '18rem' }} className='Team-Card'>
      <Card.Body>
        <Card.Title>Welcome </Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the content.
        </Card.Text>
        <Card.Link href='#'>Card Link</Card.Link>
        <Card.Link href='#'>Another Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
  );
}
