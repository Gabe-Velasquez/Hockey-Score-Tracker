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
              <Nav.Link href="#features">About</Nav.Link>
              <Nav.Link href="#pricing">Scores</Nav.Link>
              {/* Look into putting this nav dropdown into the component section and importing it */}
              <NavDropdown title="Teams" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#">Anaheim Ducks</NavDropdown.Item>
                <NavDropdown.Item href="#">Arizona Coyotes</NavDropdown.Item>
                <NavDropdown.Item href="#">Boston Bruins</NavDropdown.Item>
                <NavDropdown.Item href="#">Buffalo Sabres</NavDropdown.Item>
                <NavDropdown.Item href="#">Calgary Flames</NavDropdown.Item>
                <NavDropdown.Item href="#">Carolina Hurricanes</NavDropdown.Item>
                <NavDropdown.Item href="#">Chicago Blackhawks</NavDropdown.Item>
                <NavDropdown.Item href="#">Colorado Avalanche</NavDropdown.Item>
                <NavDropdown.Item href="#">Columbus Blue Jackets</NavDropdown.Item>
                <NavDropdown.Item href="#">Dallas Stars</NavDropdown.Item>
                <NavDropdown.Item href="#">Detroit Red Wings</NavDropdown.Item>
                <NavDropdown.Item href="#">Edmonton Oilers</NavDropdown.Item>
                <NavDropdown.Item href="#">Florida Panthers</NavDropdown.Item>
                <NavDropdown.Item href="#">Los Angeles Kings</NavDropdown.Item>
                <NavDropdown.Item href="#">Minnesota Wild</NavDropdown.Item>
                <NavDropdown.Item href="#">Montreal Canadiens</NavDropdown.Item>
                <NavDropdown.Item href="#">Nashville Predators</NavDropdown.Item>
                <NavDropdown.Item href="#">New Jersey Devils</NavDropdown.Item>
                <NavDropdown.Item href="#">New York Islanders</NavDropdown.Item>
                <NavDropdown.Item href="#">New York Rangers</NavDropdown.Item>
                <NavDropdown.Item href="#">Ottawa Senators</NavDropdown.Item>
                <NavDropdown.Item href="#">Philadelphia Flyers</NavDropdown.Item>
                <NavDropdown.Item href="#">Pittsburgh Penguins</NavDropdown.Item>
                <NavDropdown.Item href="#">San Jose Sharks</NavDropdown.Item>
                <NavDropdown.Item href="#">Seattle Kraken</NavDropdown.Item>
                <NavDropdown.Item href="#">St. Louis Blues</NavDropdown.Item>
                <NavDropdown.Item href="#">Tampa Bay Lightning</NavDropdown.Item>
                <NavDropdown.Item href="#">Toronto Maple Leafs</NavDropdown.Item>
                <NavDropdown.Item href="#">Vancouver Canucks</NavDropdown.Item>
                <NavDropdown.Item href="#">Vegas Golden Knights</NavDropdown.Item>
                <NavDropdown.Item href="#">Washington Capitals</NavDropdown.Item>
                <NavDropdown.Item href="#">Winnipeg Jets</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/contacts">Contact</Nav.Link>
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