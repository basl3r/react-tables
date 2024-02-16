import Nav from "./components/views/Nav/Nav";
import Home from "./components/pages/Home/Home";
import Footer from "./components/views/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Nav />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Container>
    </>
  );
}

export default App;
