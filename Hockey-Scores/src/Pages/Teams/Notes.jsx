import Card  from 'react-bootstrap/Card';
import renderSocialLinks from '../../utils/renderSocialLinks';
export default function Notes(){
    //The Blue Notes... 9 hours from West Virginia but they always sing this song.... 
    return(
      <div className='STL'>
        <Card style={{ width: '18rem' }} className='Team-Card'>
        <Card.Body>
          <Card.Title>Welcome </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </Card.Text>
          {/* Socials */}
          {renderSocialLinks(team)}
        </Card.Body>
      </Card>
      </div>
    )
}