import "./App.css";

import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import NotFoundPage from "./pages/NotFound";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="resto-menu-ui">
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="menus/:menuId/sections/:sectionId" Component={MenuPage} />
        <Route path="menus/:menuId" Component={MenuPage} />
        {/* Render not found page if route is invalid */}
        <Route path="*" Component={NotFoundPage} />
      </Routes>
    </Router>
  );
}

export default App;
