import {useState,useEffect} from 'react'
import axios from 'axios'

export default function Upcoming(){
    const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
    const [scores, setScores] = useState([])
    useEffect(()=>{
      axios.get(`https://api.the-odds-api.com/v4/sports/icehockey_nhl/scores/?completed=false&apiKey=${API_KEY}`)
      .then(res=>{setScores(res.data)})
      .catch(err=>console.log(err))
    }, [])
      return(
        // going to add more to this page. 
        <div>
            <h1 className='text-center'>Upcoming Games</h1>
          <table className=' centered-t text-center'>
            <thead>
              <tr>
                <th>Away Team</th>
                <th>Home Team</th>
                <th>Puck Drop</th>
              </tr>
            </thead>
            <tbody>
              {scores.map((r,i)=>(
                <tr key={i}>
                  <td>{r.away_team}</td>
                  <td>{r.home_team}</td>
                  <td>{new Date(r.commence_time).toLocaleString()}</td>
                </tr>))}
            </tbody>
          </table>
          </div>
          )
}