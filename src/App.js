import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "../src/component/Login/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} exact></Route>
      </Routes>
    </div>
  );
}

export default App;
