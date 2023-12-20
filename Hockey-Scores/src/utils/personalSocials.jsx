import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import {
  faLinkedin,
  faXTwitter,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

export default function personalSocials(){
    return(
        <div>
        <Card.Link href="https://www.linkedin.com/in/gabriel-velasquez-/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></Card.Link>
        <Card.Link href="https://github.com/Gabe-Velasquez" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></Card.Link>
        </div>
)}
