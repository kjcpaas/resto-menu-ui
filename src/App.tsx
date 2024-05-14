import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import logoUrl from "./assets/img/logo.png";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import NotFoundPage from "./pages/NotFound";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/resto-menu-ui">
            <img
              alt=""
              src={logoUrl}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            What's on the Menu?
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Router basename="resto-menu-ui">
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route
              path="menus/:menuId/sections/:sectionId"
              Component={MenuPage}
            />
            <Route path="menus/:menuId" Component={MenuPage} />
            {/* Render not found page if route is invalid */}
            <Route path="*" Component={NotFoundPage} />
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;
