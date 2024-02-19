// Components
import Navbar from "./components/Navbar";
import Project from "./components/Project";

// Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
