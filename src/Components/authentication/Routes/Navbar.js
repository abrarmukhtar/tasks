import React from "react";
import { Navbar, nav, Nav } from "react-bootstrap";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Routes from "../Routes";

export default function NavbarComponent() {
  // const { currentUser } = useAuth();

  return (
    <Router>
{/* 
        <Navbar bg="light" expand="sm">
          <Navbar.Brand as={Link} to="/">
          Range Slider
          </Navbar.Brand>

          <Nav>
            <Nav.Link as={Link} to="/beat" className="Links" >
              Beats Buttons
            </Nav.Link>
          </Nav> 
        </Navbar> */}
    
        <Routes />

    </Router>
  );
}
