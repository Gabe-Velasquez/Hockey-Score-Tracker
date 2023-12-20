import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faXTwitter,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

export default function personalSocials(){
    return(
        <div>
        <Card.Link href="https://www.linkedin.com/in/gabriel-velasquez-/" target="_blank" rel="noopener noreferrer">LinkedIn</Card.Link>
        <Card.Link href="https://github.com/Gabe-Velasquez" target="_blank" rel="noopener noreferrer">Github</Card.Link>
        </div>
)}
