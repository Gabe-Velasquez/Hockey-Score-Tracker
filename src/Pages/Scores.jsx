import axios from 'axios';
import { useEffect, useState } from 'react';


export default function Scores(){
  const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
  const [scores, setScores] = useState([]);
  useEffect(()=>{
    axios.get(`https://api.the-odds-api.com/v4/sports/icehockey_nhl/scores/?daysFrom=1&apiKey=${API_KEY}`)
    .then(res=>{setScores(res.data)})
    .catch(err=>console.log(err))
}, []) 

    return(
      <div className='puck'>
      <div>
        <h1 className='text-center'>Live NHL Scores</h1>
      <table className='centered-t text-center'>
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
              r.scores !== null && r.completed === false &&
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
        <hr></hr>
      <h1 className='text-center'>Concluded Games</h1>
      <table className='centered-t text-center'>
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
              r.scores !== null && r.completed === true &&
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
      </div>
      </div>
    )
}