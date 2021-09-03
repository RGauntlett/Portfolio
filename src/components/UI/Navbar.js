import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/home">
          <Navbar.Brand href="#home">Richard Gauntlett</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/projects">
              <Nav.Link>Projects</Nav.Link>
            </LinkContainer>
            <Nav.Link href="#pricing"></Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Menu" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://www.discouter.com">
                Discouter
              </NavDropdown.Item>
              <NavDropdown.Item href="https://neighbourhood-boxing.web.app">
                NBRHD Boxing
              </NavDropdown.Item>
              <LinkContainer to="/contact">
                <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
