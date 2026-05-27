import "./App.css";

import {
  Routes,
  Route,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import StaffPage from "./pages/StaffPage";
import GalleryPage from "./pages/GalleryPage";
import AdmissionPage from "./pages/AdmissionPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/about"
        element={<AboutPage />}
      />

      <Route
        path="/staff"
        element={<StaffPage />}
      />

      <Route
        path="/gallery"
        element={<GalleryPage />}
      />

      <Route
        path="/admission"
        element={<AdmissionPage />}
      />

      <Route
        path="/contact"
        element={<ContactPage />}
      />
    </Routes>
  );
}

export default App;