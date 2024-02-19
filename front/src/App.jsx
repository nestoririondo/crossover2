// CSS
import "./styles/boilerplate.css";

// Components
import Navbar from "./components/Navbar";
import Project from "./views/Project";
import Home from "./views/Home";

// Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
