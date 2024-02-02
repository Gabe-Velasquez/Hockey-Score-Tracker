import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function personalSocials() {
  return (
    <div className='d-flex justify-content-center gap-5' style={{ fontSize: '60px' }}>
      <Card.Link
        href='https://www.linkedin.com/in/gabriel-velasquez-/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </Card.Link>
      <Card.Link
        href='https://github.com/Gabe-Velasquez'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon icon={faGithub} />
      </Card.Link>
      <Card.Link href='mailto: gabriel.velasquez0116@gmail.com'>
        <FontAwesomeIcon icon={faEnvelope} />
      </Card.Link>
    </div>
  );
}
