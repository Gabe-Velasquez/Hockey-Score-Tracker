import Card from 'react-bootstrap/Card';

function Home() {
  return (
    <div className='puck'>
      <Card className='m-auto text-center' style={{ width: '18rem', display:'flex', justifyContent:'center', alignItems:'center', }}>
        <Card.Body>
          <Card.Title>Welcome to NHL Score (work in progress)</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            This project started out as a way to get NHL easier than the official nhl app. 
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
