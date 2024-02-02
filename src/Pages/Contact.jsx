import Card from 'react-bootstrap/Card';
import PersonalSocials from '../Components/personalSocials';

export default function Contact() {
  return (
    <div className='puck'>
    <Card className='m-auto text-center ' style={{ width: '28rem', fontSize: '34px' }}>
      <Card.Body>
        <Card.Text>Contact</Card.Text>
        
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
