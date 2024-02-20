import Nav from "./components/views/Nav/Nav";
import Home from "./components/pages/Home/Home";
import Footer from "./components/views/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { Container, Spinner } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTablesFromAPI } from "./redux/tablesRedux";
import TableDetails from "./components/pages/TableDetails/TableDetails";
import NotFound from "./components/pages/NotFound/NotFound";

function App() {

  const dispatch = useDispatch();
  const loading = useSelector(state => state.tables.loading);

  useEffect(() => {
    console.log('Loading');
    dispatch(loadTablesFromAPI());
  }, []);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" role="status" />
        <span className="visually-hidden">Loading...</span>
      </Container>
    );
  }

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
