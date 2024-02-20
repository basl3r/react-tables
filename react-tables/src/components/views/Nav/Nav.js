import styles from './Nav.module.scss';
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Nav() {
  return(
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Waiter.app </Navbar.Brand>
        <NavLink to="/" className={styles.navLinks}>Home</NavLink>
      </Container>
    </Navbar>
  );
};

export default Nav;

