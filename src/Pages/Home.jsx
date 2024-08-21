import Card from 'react-bootstrap/Card';
import Scores from '../Components/scores.jsx';

const getUpcomingGame = (scores)=>{
  if (!scores || scores.length === 0) 
  return false;

  // creates time comparison
  const now= new Date();
  const threeDays = new Date(now.getTime()+3*24*60*60*1000);
  return scores.some(score=> new Date(score.date)<= threeDays);
}

function Home({scores}) {
  const hasUpcomingGame = getUpcomingGame(scores)
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

      {scores === null || scores.length === 0 ? (
        <Card className='text-center puck-card' style={{ width: '20rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Card.Body>
            <h1>It's the Offseason! Time to watch baseball! </h1>
          </Card.Body>
        </Card>
      ) : hasUpcomingGame ? (
        // need to make change, if team plays the same team 3 to four times in a row... switch to playoff render.
        <Card className='text-center puck-card' style={{ width: '20rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Card.Body>
            <h1>Playoff</h1>
            <Scores />
          </Card.Body>
        </Card>
      ) : (
        <Card className='text-center puck-card' style={{ width: '20rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Card.Body>
            <h1>Currently in Season! </h1>
            <Scores />
          </Card.Body>
        </Card>
      )}
      {/* Playoff Hockey Card will go here, need to make one for current/incoming season, have ternary operator to switch between seasons and render appropriately*/}
      {/* <Card className='text-center puck-card' style={{ width: '20rem', display:'flex', justifyContent:'center', alignItems:'center', }}>
        <Card.Body>
          <h1>Playoff Hockey is HERE!</h1>

          <Scores />
        </Card.Body>
      </Card> */}
      {/* This really could be built in one card with conditional operator to switch */}
      {/* <Card  className='text-center puck-card' style={{ width: '20rem', display:'flex', justifyContent:'center', alignItems:'center', }}>
        <Card.Body>
          <h1>Currently in Season</h1>
          <Scores />
        </Card.Body>
      </Card> */}
    </div>
  );
}

export default Home;
