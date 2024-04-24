import Card from 'react-bootstrap/Card';
import Scores from '../Components/scores.jsx';


function Home() {
  return (
    <div style={{ display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
      <Card className='text-center puck-card' style={{ width: '18rem', display:'flex', justifyContent:'center', alignItems:'center', }}>
        <Card.Body>
          <Card.Title>Welcome to my NHL Score Tracker Application</Card.Title>
          
          <Card.Text>
            This project started out as a way to get NHL easier than the official nhl app. With this application, you can see scores of live games while checking out any upcoming hockey games. Thinking of going to a game? Check out a teams page and you can see the next 5 games for your favorite team!  
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='text-center puck-card' style={{ width: '20rem', display:'flex', justifyContent:'center', alignItems:'center', }}>
        <Card.Body>
          <h1>Playoff Hockey is HERE!</h1>

          <Scores />
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
