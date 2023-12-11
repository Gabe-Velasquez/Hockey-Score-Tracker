import Card from 'react-bootstrap/Card'
export default function About(){
    return(
        <Card className='m-auto text-center' style={{ width: '18rem'}}>
        <Card.Body>
          <Card.Title>About</Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text>
          This is a simple web application built using React.js, Node.js and Express.js. This application is built to fetch scores, learn about teams (fun facts and trivia), and betting odds of live games.
          </Card.Text>
          
        </Card.Body>
      </Card>
        // <div className="card">
        //     <h1 className="m-auto text-center">About</h1>
        //     <p></p>
        //     <p>This application is built to fetch scores, learn about teams (fun facts and trivia), and betting odds of live games.</p>
        // </div>
    )
}