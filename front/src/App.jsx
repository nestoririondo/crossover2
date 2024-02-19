import React from "react";

// CSS
import "./styles/boilerplate.css";

// Components
import Navbar from "./components/Navbar";
import Project from "./views/Project";
import Login from "./views/Login";
import Home from "./views/Home";
import NewProject from "./views/NewProject";

// Router
import { Routes, Route } from "react-router-dom";
import SignupForm from "./components/SignupForm";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />

        <Route path="/signup" element={<SignupForm />} />

        <Route path="/new-project" element={<NewProject />} />

        <Route path="/login" element={<Login />} />

      </Routes>
    </>
  );
}

export default App;
