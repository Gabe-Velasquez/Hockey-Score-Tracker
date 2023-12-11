import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header(){
    return(
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Live Hockey Scores</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/scores">Scores</Nav.Link>
              {/* Look into putting this nav dropdown into the component section and importing it */}
              <NavDropdown title="Teams" id="collasible-nav-dropdown">
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
            </Nav>
            <Nav>
              <Nav.Link href="/Contact">Contact</Nav.Link>
              {/* <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    // <Navbar className="navbar navbar-expand-lg navbar-light bg-dark">
    //     <Container className="nav">
    //         <li><a href="/" className="nav-link active" aria-current="page">Home</a></li>
    //         <li><a href="/about" className="nav-link">About</a></li>
    //         <li><a href="/scores" className="nav-link">Scores</a></li>
    //         <li><a href="/contact" className="nav-link">Contact</a></li>
    //     </Container>
    // </Navbar>
    );
}