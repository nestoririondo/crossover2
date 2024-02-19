import ProjectCard from "../components/ProjectCard";
import "../styles/ProjectCard.css"
import "../styles/Home.css"

const Home = () => {
    return ( <>
    <h1>Welcome to FundMyCode</h1>
    <input type="text" placeholder="Search for Projects by name or category"/>
    <section className="projects-container">

    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    </section>
    </> );
}
 
export default Home;