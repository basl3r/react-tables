import Nav from "./components/Nav/Nav";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Nav />
      <Container>
        <Content />
        <Footer />
      </Container>
    </>
  );
}

export default App;
