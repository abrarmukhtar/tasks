import React from "react";
import { Navbar, Nav} from "react-bootstrap";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Routes from "../authentication/Routes";

export default function Home() {
  return (
    <Router>

      <Routes />
      <Navbar bg="light" expand="sm" className="links_container">
        Click any Link below!
        <ul>
          <li>
        <Nav>
            <Nav.Link as={Link} to="/slider" className="Links" >
              Range Slider
            </Nav.Link>
          </Nav> 
          </li>
          <li>
          <Nav>
            <Nav.Link as={Link} to="/beat" className="Links">
            Beats the Buttons
            </Nav.Link>
          </Nav>
          </li> 
          </ul>
      </Navbar>

    </Router>
  );
}
