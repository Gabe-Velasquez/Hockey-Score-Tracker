import Card from 'react-bootstrap/Card'
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function Scores(){
  const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
  const [scores, setScores] = useState([]);
  useEffect(()=>{
    axios.get(`https://api.the-odds-api.com/v4/sports/icehockey_nhl/scores/?daysFrom=1&apiKey=${API_KEY}`)
    .then(res=>{setScores(res.data)})
    .catch(err=>console.log(err))
  },[])
    return(
      <table className=' m-atuo text-center'>
          <thead>
            <tr>
              <th>Home Team</th>
              <th>Home Score</th>
              <th>Away Team</th>
              <th>Away Score</th>
            </tr>
          </thead>
          <tbody>
            {scores && scores.map((r,i)=>(
              r.scores !== null && 
              <tr key={i}>
                <td>{r.home_team}</td>
                <td>{r.scores && r.scores.find(team => team.name === r.home_team)?.score}</td>
                <td>{r.away_team}</td>
                <td>{r.scores && r.scores.find(team => team.name === r.away_team)?.score}</td>
              </tr>
              ))
            }
          </tbody>
        </table>
      //   // TODO: Create loop that will dynamically generate scores for current games! 
      //   <Card className='m-auto text-center' style={{ width: '18rem'}}>
      //   <Card.Body>
      //     <Card.Title>Scores</Card.Title>
      //     {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
      //     <Card.Text>
      //     This will have cards that will generate live hockey scores and odds. Stay tuned.
      //     </Card.Text>
          
      //   </Card.Body>
      // </Card>
        // <div className="card">
        //     <h1>Live Scores</h1>
        //     <p>This is the scores page.</p>
        // </div>
    )
}