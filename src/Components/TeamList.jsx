import { NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const teamPaths = [
  '/Teams/AnaheimDucks',
  '/Teams/ArizonaCoyotes',
  '/Teams/BostonBruins',
  '/Teams/BuffaloSabres',
  '/Teams/CalgaryFlames',
  '/Teams/CarolinaHurricanes',
  '/Teams/ChicagoBlackhawks',
  "/Teams/ColoradoAvalanche",
  '/Teams/ColumbusBlueJackets',
  '/Teams/DallasStars',
  '/Teams/DetroitRedWings',
  '/Teams/EdmontonOilers',
  '/Teams/FloridaPanthers',
  '/Teams/LosAngelesKings',
  '/Teams/MinnesotaWild',
  '/Teams/MontrealCanadiens',
  '/Teams/NashvillePredators',
  '/Teams/NewJerseyDevils',
  '/Teams/NewYorkIslanders',
  '/Teams/NewYorkRangers',
  '/Teams/OttawaSenators',
  '/Teams/PhiladelphiaFlyers',
  '/Teams/PittsburghPenguins',
  '/Teams/SanJoseSharks',
  '/Teams/SeattleKraken',
  '/Teams/StLouisBlues',
  '/Teams/TampaBayLightning',
  '/Teams/TorontoMapleLeafs',
  '/Teams/VancouverCanucks',
  '/Teams/VegasGoldenKnights',
  '/Teams/WashingtonCapitals',
  '/Teams/WinnipegJets',
];

export default function TeamList() {
  const navigate = useNavigate();

  const handleTeamClick = (path) => {
    navigate(path);
  };

  const handleSurpriseMeClick = () => {
    const randomIndex = Math.floor(Math.random() * teamPaths.length);
    const randomPath = teamPaths[randomIndex];
    navigate(randomPath);
  };

  return (
    <NavDropdown title='Teams' id='collasible-nav-dropdown'>
    {teamPaths.map((path, index) => {
      const teamNameWithSpaces = path.split('/').pop().replace(/([A-Z])/g, ' $1').trim();
      return (
        <NavDropdown.Item key={index} href={path} onClick={() => handleTeamClick(path)}>
          {teamNameWithSpaces}
        </NavDropdown.Item>
      );
    })}
    <NavDropdown.Divider />
    <NavDropdown.Item onClick={handleSurpriseMeClick}>
      Surprise Me
    </NavDropdown.Item>
  </NavDropdown>
);
}
