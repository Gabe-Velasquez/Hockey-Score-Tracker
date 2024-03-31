import Card from 'react-bootstrap/Card';
export default function About() {
  return (
    <div className='puck'>
    <Card className='text-center ' style={{marginLeft: 280, marginRight: 280, marginBottom: 40}}>
      <Card.Body>
        <Card.Title>About</Card.Title>
        <Card.Text>
          This is a simple web application built using React.js, Node.js and
          Express.js. This application is built to fetch scores, learn about
          teams (fun facts and trivia), and betting odds of live games. This application was built as a passion project and do not own any of these images. 
        </Card.Text>
        </Card.Body>
    </Card>
      <div className='About-Tiles'>
        <Card className='puck-card'>
            <Card.Text>
              I used The Odds API to fetch sport data of upcoming and scores. In the future, I will display winning odds of each game that is set to play. 
            </Card.Text>
        </Card>

        <Card className='puck-card'>
            <Card.Text>
              For the ticketing information, I integrated Seat Geek&apos;s API to retrieve data from which team is playing, where and what day. You can even use links generated to purchase tickets from Seat Geek. 
            </Card.Text>
        </Card>
        <Card className='puck-card'>
            <Card.Text>
              For the players on each team page, I made an API that will call depending on which team is being loaded. From there, I have it linked to Wikipedia pages for each player that is called. If you wanted to follow a specific team&apos;s social media, I have them listed on each of their pages! 
            </Card.Text>
        </Card>
        <Card className='puck-card'>
            <Card.Text>
              Google Maps API was used to gather where each arena for a team was and plotted the facility with a simple query with a given arena name. 
            </Card.Text>
        </Card>
        <Card className='puck-card'>
            <Card.Text>
              The Yelp API was used to find a bite to eat around surrounding arenas so the user does not have to settle for overpriced drinks and arena food that does not have taste. 
            </Card.Text>
        </Card>
      </div>
    </div>
  );
}
