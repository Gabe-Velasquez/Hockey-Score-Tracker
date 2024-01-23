// import NavDropdown from 'react-bootstrap/NavDropdown';

// export default function TeamList() {
//   return (
//     <NavDropdown title='Teams' id='collasible-nav-dropdown'>
//       <NavDropdown.Item href='/Teams/AnaheimDucks'>
//         Anaheim Ducks
//       </NavDropdown.Item>
//       <NavDropdown.Item href='/Teams/ArizonaCoyotes'>
//         Arizona Coyotes
//       </NavDropdown.Item>
//       <NavDropdown.Item href='/Teams/BostonBruins'>
//         Boston Bruins
//       </NavDropdown.Item>
//       <NavDropdown.Item href='/Teams/BuffaloSabres'>
//         Buffalo Sabres
//       </NavDropdown.Item>
//       <NavDropdown.Item href='/Teams/CalgaryFlames'>
//         Calgary Flames
//       </NavDropdown.Item>
//       <NavDropdown.Item href='/Teams/CarolinaHurricanes'>
//         Carolina Hurricanes
//       </NavDropdown.Item>
//       <NavDropdown.Item href='/Teams/ChicagoBlackhawks'>
//         Chicago Blackhawks
//       </NavDropdown.Item>
//       <NavDropdown.Item href='/Teams/ColoradoAvalanche'>
//         Colorado Avalanche
//       </NavDropdown.Item>
//       <NavDropdown.Item href='/Teams/ColumbusBlueJackets'>
//         Columbus Blue Jackets
//       </NavDropdown.Item>
//       <NavDropdown.Item href='/Teams/DallasStars'>
//         Dallas Stars
//       </NavDropdown.Item>
//       <NavDropdown.Item href='/Teams/DetroitRedWings'>
//         Detroit Red Wings
//       </NavDropdown.Item>
//       <NavDropdown.Item href='/Teams/EdmontonOilers'>
//         Edmonton Oilers
//       </NavDropdown.Item>
//       <NavDropdown.Item href='/Teams/FloridaPanthers'>
//         Florida Panthers
//       </NavDropdown.Item>
//       <NavDropdown.Item href='/Teams/LosAngelesKings'>
//         Los Angeles Kings
//       </NavDropdown.Item>
//       <NavDropdown.Item href='/Teams/MinnesotaWild'>
//         Minnesota Wild
//       </NavDropdown.Item>
//       <NavDropdown.Item href='/Teams/MontrealCanadiens'>
//         Montreal Canadiens
//       </NavDropdown.Item>
//       <NavDropdown.Item href='/Teams/NashvillePredators'>
//         Nashville Predators
//       </NavDropdown.Item>
//       <NavDropdown.Item href='/Teams/NewJerseyDevils'>
//         New Jersey Devils
//       </NavDropdown.Item>
//       <NavDropdown.Item href='/Teams/NewYorkIslanders'>
//         New York Islanders
//       </NavDropdown.Item>
//       <NavDropdown.Item href='/Teams/NewYorkRangers'>
//         New York Rangers
//       </NavDropdown.Item>
//       <NavDropdown.Item href='/Teams/OttawaSenators'>
//         Ottawa Senators
//       </NavDropdown.Item>
//       <NavDropdown.Item href='/Teams/PhiladelphiaFlyers'>
//         Philadelphia Flyers
//       </NavDropdown.Item>
//       <NavDropdown.Item href='/Teams/PittsburghPenguins'>
//         Pittsburgh Penguins
//       </NavDropdown.Item>
//       <NavDropdown.Item href='/Teams/SanJoseSharks'>
//         San Jose Sharks
//       </NavDropdown.Item>
//       <NavDropdown.Item href='/Teams/SeattleKraken'>
//         Seattle Kraken
//       </NavDropdown.Item>
//       <NavDropdown.Item href='/Teams/StLouisBlues'>
//         St. Louis Blues
//       </NavDropdown.Item>
//       <NavDropdown.Item href='/Teams/TampaBayLightning'>
//         Tampa Bay Lightning
//       </NavDropdown.Item>
//       <NavDropdown.Item href='/Teams/TorontoMapleLeafs'>
//         Toronto Maple Leafs
//       </NavDropdown.Item>
//       <NavDropdown.Item href='/Teams/VancouverCanucks'>
//         Vancouver Canucks
//       </NavDropdown.Item>
//       <NavDropdown.Item href='/Teams/VegasGoldenKnights'>
//         Vegas Golden Knights
//       </NavDropdown.Item>
//       <NavDropdown.Item href='/Teams/WashingtonCapitals'>
//         Washington Capitals
//       </NavDropdown.Item>
//       <NavDropdown.Item href='/Teams/WinnipegJets'>
//         Winnipeg Jets
//       </NavDropdown.Item>
//       <NavDropdown.Divider />
//       <NavDropdown.Item>
//         Surpise Me
//       </NavDropdown.Item>
//     </NavDropdown>
//   );
// }


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
