import { Navbar} from "react-bootstrap";

const Nav =()=>{
    return (
    <Navbar className="navbar navbar-expand-lg navbar-light bg-dark">
        <ul className="nav">
            <li><a href="/" className="nav-link active" aria-current="page">Home</a></li>
            <li><a href="/about" className="nav-link">About</a></li>
            <li><a href="/scores" className="nav-link">Scores</a></li>
            <li><a href="/contact" className="nav-link">Contact</a></li>
        </ul>
    </Navbar>
    )
}

export default Nav;