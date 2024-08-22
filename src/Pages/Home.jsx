
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

const isPlayoffSeries = (scores) =>{
  if (!scores || scores.length === 0)
  return false;

  let consecutiveCount=1;
  for (let i=1; i< scores.length; i++){
    if (scores[i].team === scores[i-1].team){
      consecutiveCount++;
      if (consecutiveCount>=3){
        return true;
      }}else{
        consecutiveCount=1;
      }
    }
    return false;
}

function Home({scores}) {
  const hasUpcomingGame = getUpcomingGame(scores);
  const isPlayoff = isPlayoffSeries(scores);

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
      ) : isPlayoff ? (
    
        <Card className='text-center puck-card' style={{ width: '20rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Card.Body>
            <h1>Playoff</h1>
            <Scores />
          </Card.Body>
        </Card>
      ) : hasUpcomingGame ? (
        <Card className='text-center puck-card' style={{ width: '20rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Card.Body>
            <h1>Currently in the season! </h1>
            <Scores />
          </Card.Body>
        </Card>
      ) : (
        <Card className='text-center puck-card' style={{ width: '20rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Card.Body>
            <h1>No games scheduled soon! Check back later!!</h1>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default Home;