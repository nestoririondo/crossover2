import ProjectCard from "../components/ProjectCard";
import "../styles/ProjectCard.css";
import "../styles/Home.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const SERVER = import.meta.env.VITE_SERVER;

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${SERVER}/projects/all`);
      setProjects(response.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    console.log(projects);
  }, [projects]);

  return (
    <section className="home">
    <h1>Welcome to FundMyCode</h1>
    <input
      type="text"
      placeholder="Search for Projects by name or category"
    />
    {loading ? <div>Loading Projects ...</div> : null}
    {projects.length > 0 ? (
      <>
        <h2>Latest Projects</h2>
        <section className="projects-container">
          {projects.map((project,index) => (
            <ProjectCard project={project} key={index}/>
          ))}
        </section>
      </>
    ) : null}
  </section>
  );
};

export default Home;
