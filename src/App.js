import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "../src/component/Login/Login";
import LandingPage from "../src/component/LandingPage/LandingPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} exact></Route>
        <Route path="/landing" element={<LandingPage />} exact></Route>
      </Routes>
    </div>
  );
}

export default App;
