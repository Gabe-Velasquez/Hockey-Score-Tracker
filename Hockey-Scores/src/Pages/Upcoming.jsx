import {useState,useEffect} from 'react'
import axios from 'axios'

export default function Upcoming(){
    const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
    const [scores, setScores] = useState([])
    useEffect(()=>{
      axios.get(`https://api.the-odds-api.com/v4/sports/icehockey_nhl/scores/?completed=false&apiKey=${API_KEY}`)
      .then(res=>{setScores(res.data)})
      .catch(err=>console.log(err))
    },[])
      return(
        <div>
          <table className=' m-atuo text-center'>
            <thead>
              <tr>
                <th>Home Team</th>
                <th>Away Team</th>
                <th>Puck Drop</th>
              </tr>
            </thead>
            <tbody>
              {scores.map((r,i)=>(
                <tr key={i}>
                  <td>{r.home_team}</td>
                  <td>{r.away_team}</td>
                  <td>{new Date(r.commence_time).toLocaleString()}</td>
                </tr>))}
            </tbody>
          </table>
          </div>
          )
}