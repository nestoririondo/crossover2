// CSS
import "./styles/boilerplate.css";

// Components
import Navbar from "./components/Navbar";
import Project from "./components/Project";

// Router
import { Routes, Route } from "react-router-dom";
import SignupForm from "./components/SignupForm";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </>
  );
}

export default App;
