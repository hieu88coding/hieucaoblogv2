import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import IntroPage from "./pages/404/404Page";
import AboutPage from "./pages/AboutPage/AboutPage";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
function App() {
  const mode = useSelector((state: RootState) => state.theme.mode);
  return (
    <Router>
      <Routes>
        <Route
          path="/landing"
          element={
            <div className={mode}>
              <LandingPage mode={mode} />
            </div>
          }
        />
        <Route path="/" element={<IntroPage />} />
        <Route
          path="/about"
          element={
            <div className={mode}>
              <AboutPage mode={mode} />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
