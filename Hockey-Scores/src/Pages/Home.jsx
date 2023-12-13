
import Card  from 'react-bootstrap/Card';


function Home(){
    return(
      <div>
        
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
        </div>
        // <div className="card">
        //     <h1>Home</h1>
        //     <p><a href="/about">Go to About Page</a></p>
        //     <p><a href="/contacts">Go to Contacts Page</a></p>
        //     <p><a href="/scores">Go to Scores!</a></p>
        // </div>
    )
}

export default Home;