import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import TeamList from './TeamList.jsx'

export default function Header(){
    return(
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Live Hockey Scores</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/scores">Scores</Nav.Link>
              <Nav.Link href='/upcoming'>Upcoming</Nav.Link>
              {/* place list of teams here */}
              <TeamList />
            </Nav>
            <Nav>
              <Nav.Link href="/Contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}