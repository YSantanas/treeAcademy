import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Container,
  Navbar as RBNavbar,
  Nav,
  NavDropdown,
} from 'react-bootstrap';
import Arbol from '../assets/logoArbol.png';

const Navbar = () => {
  return (
    <RBNavbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <img src={Arbol} alt="" width="50" height="45" class="mx-auto"></img>

      <Container>
        <RBNavbar.Brand href="/">Tree Academy</RBNavbar.Brand>
        <RBNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <RBNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/acerca">Acerca</Nav.Link>
            <Nav.Link href="/registro">Registro</Nav.Link>
            <NavDropdown title="Cursos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/catalogo">Catologo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">curso 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">curso 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">curso 4</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </RBNavbar.Collapse>
      </Container>
    </RBNavbar>
  );
};
export default Navbar;
