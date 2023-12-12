import { useEffect, useState } from 'react';
import Card  from 'react-bootstrap/Card';
import axios from 'axios';

function Home(){
  const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
  const [scores, setScores] = useState([])
  useEffect(()=>{
    axios.get(`https://api.the-odds-api.com/v4/sports/icehockey_nhl/scores/?daysFrom=1&apiKey=${API_KEY}`)
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
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Welcome </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card>
        </div>
        // <div className="card">
        //     <h1>Home</h1>
        //     <p><a href="/about">Go to About Page</a></p>
        //     <p><a href="/contacts">Go to Contacts Page</a></p>
        //     <p><a href="/scores">Go to Scores!</a></p>
        // </div>
    )
}

export default Home;