import Card from 'react-bootstrap/Card'



export default function Scores(){
    return(
        // TODO: Create loop that will dynamically generate scores for current games! 
        <Card className='m-auto text-center' style={{ width: '18rem'}}>
        <Card.Body>
          <Card.Title>Scores</Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text>
          This will have cards that will generate live hockey scores and odds. Stay tuned.
          </Card.Text>
          
        </Card.Body>
      </Card>
        // <div className="card">
        //     <h1>Live Scores</h1>
        //     <p>This is the scores page.</p>
        // </div>
    )
}