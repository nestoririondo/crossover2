// CSS
import "./styles/boilerplate.css";

// Components
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Login from "./views/Login";

// Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
