import Card from 'react-bootstrap/Card';
import PersonalSocials from '../Components/personalSocials';

export default function Contact() {
  return (
    <div className='puck'>
    <Card className='m-auto text-center' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Contact</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text>
          Thank you for using my application! If you have any questions or
          experience any issues, you can reach out to me on the following
          platforms:
        </Card.Text>
        {/* Loops iterates each social media link in teams array */}
        <PersonalSocials />
      </Card.Body>
    </Card>
    </div>
  );
}
