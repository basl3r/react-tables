import { Container, Navbar } from "react-bootstrap";

function Nav() {
  return(
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Waiter.app </Navbar.Brand>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Nav;

