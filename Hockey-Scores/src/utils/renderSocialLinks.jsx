import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const renderSocialLinks = (team) => (
  <>
    {team.facebook && (
      <Card.Link href={team.facebook} rel='noreferrer' target='_blank'>
        <FontAwesomeIcon icon={faFacebook} />
      </Card.Link>
    )}
    {team.instagram && (
      <Card.Link href={team.instagram} rel='noreferrer' target='_blank'>
        <FontAwesomeIcon icon={faInstagram} />
      </Card.Link>
    )}
    {team.tiktok && (
      <Card.Link href={team.tiktok} rel='noreferrer' target='_blank'>
        <FontAwesomeIcon icon={faTiktok} />
      </Card.Link>
    )}
    {team.youtube && (
      <Card.Link href={team.youtube} rel='noreferrer' target='_blank'>
        <FontAwesomeIcon icon={faYoutube} />
      </Card.Link>
    )}
    {team.twitter && (
      <Card.Link href={team.twitter} rel='noreferrer' target='_blank'>
        <FontAwesomeIcon icon={faXTwitter} />
      </Card.Link>
    )}
  </>
);

export default renderSocialLinks;
