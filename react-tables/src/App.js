import Nav from "./components/views/Nav/Nav";
import Home from "./components/pages/Home/Home";
import Footer from "./components/views/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadTablesFromAPI } from "./redux/tablesRedux";
import TableDetails from "./components/pages/TableDetails/TableDetails";
import NotFound from "./components/pages/NotFound/NotFound";

function App() {
// eslint-disable-next-line
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('Loading');
    dispatch(loadTablesFromAPI());
  }, []);

  return (
    <>
      <Nav />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:id" element={<TableDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </>
  );
}

export default App;
