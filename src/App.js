import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "../src/component/Login/Login";
import LandingPage from "../src/component/LandingPage/LandingPage";
import DetailPage from "./component/DetailPage/DetailPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} exact></Route>
        <Route path="/landing" element={<LandingPage />} exact></Route>
        <Route path="/detailpage" element={<DetailPage />} exact></Route>
      </Routes>
    </div>
  );
}

export default App;
