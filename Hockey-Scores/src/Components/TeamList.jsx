import NavDropdown from 'react-bootstrap/NavDropdown';

export default function TeamList(){
    return(<NavDropdown title="Teams" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/Teams/AnaheimDucks">Anaheim Ducks</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/ArizonaCoyotes">Arizona Coyotes</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/BostonBruins">Boston Bruins</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/BuffaloSabres">Buffalo Sabres</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/CalgaryFlames">Calgary Flames</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/CarolinaHurricanes">Carolina Hurricanes</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/ChicagoBlackhawks">Chicago Blackhawks</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/ColoradoAvalanche">Colorado Avalanche</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/ColumbusBlueJackets">Columbus Blue Jackets</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/DallasStars">Dallas Stars</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/DetroitRedWings">Detroit Red Wings</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/EdmontonOilers">Edmonton Oilers</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/FloridaPanthers">Florida Panthers</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/LosAngelesKings">Los Angeles Kings</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/MinnesotaWild">Minnesota Wild</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/MontrealCanadiens">Montreal Canadiens</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/NashvillePredators">Nashville Predators</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/NewJerseyDevils">New Jersey Devils</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/NewYorkIslanders">New York Islanders</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/NewYorkRangers">New York Rangers</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/OttawaSenators">Ottawa Senators</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/PhiladelphiaFlyers">Philadelphia Flyers</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/PittsburghPenguins">Pittsburgh Penguins</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/SanJoseSharks">San Jose Sharks</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/SeattleKraken">Seattle Kraken</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/StLouisBlues">St. Louis Blues</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/TampaBayLightning">Tampa Bay Lightning</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/TorontoMapleLeafs">Toronto Maple Leafs</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/VancouverCanucks">Vancouver Canucks</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/VegasGoldenKnights">Vegas Golden Knights</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/WashingtonCapitals">Washington Capitals</NavDropdown.Item>
                <NavDropdown.Item href="/Teams/WinnipegJets">Winnipeg Jets</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
    )
}