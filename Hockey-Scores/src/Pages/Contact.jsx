import Card  from 'react-bootstrap/Card';

export default function Contact(){
    return(
        <Card className='m-auto text-center' style={{ width: '18rem'}}>
        <Card.Body>
          <Card.Title>Contact</Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text>
          Thank you for using my application! If you have any questions or experience any issues, you can reach out to me on the following platforms: 
          </Card.Text>
          <Card.Link href="https://www.linkedin.com/in/gabriel-velasquez-/" target="_blank" rel="noopener noreferrer">LinkedIn</Card.Link>
          <Card.Link href="https://github.com/Gabe-Velasquez" target="_blank" rel="noopener noreferrer">Github</Card.Link>
        </Card.Body>
      </Card>
        // <div className="card ">
        //     <h1>Contact</h1>
        //     <p>You can reach out to me on the following platforms: </p>
        //     <ul>
        //         <li><a href="https://www.linkedin.com/in/gabriel-velasquez-/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        //         <li><a href="https://github.com/Gabe-Velasquez" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        //     </ul>
        // </div>
    )
}
