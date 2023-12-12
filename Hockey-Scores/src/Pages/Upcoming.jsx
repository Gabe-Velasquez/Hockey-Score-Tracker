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
          <table>
            <thead>
              <tr>
                <th>Home Team</th>
                
                <th></th>
                <th>Away Team</th>
              </tr>
            </thead>
            <tbody>
              {scores.map((r,i)=>(
                <tr key={i}>
                  <td>{r.home_team}</td>
                  <td></td>
                  <td>{r.away_team}</td>
                </tr>))}
            </tbody>
          </table>
          </div>
          )
}