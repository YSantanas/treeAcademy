import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




const navbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
      <Container>
        <Navbar.Brand href="/Comienzo">Tree Academy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/inicio">Inicio</Nav.Link>
            <Nav.Link href="/registro">Registro</Nav.Link>
            <NavDropdown title="Cursos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/curso1">curso 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                curso 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">curso 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              curso 4
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Login</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default navbar;
