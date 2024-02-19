// CSS
import "../styles/project.css";

// Images
import website from "../assets/website.png";
import accountIcon from "../assets/account_circle_FILL0_wght400_GRAD0_opsz24.png";
import Donation from "../components/Donation";
import { useEffect, useState } from "react";

// Libraries
import axios from "axios";

const Project = () => {
  const [project, setProject] = useState(null);

  const url = `http://localhost:8000/projects/65d32c52b4a7f3205127f12e`;

  useEffect(() => {
    const getProject = async () => {
      try {
        const response = await axios.get(url);
        console.log(response);
        setProject(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProject();
  }, []);

  return (
    <section id="project-view">
      {!project ? (
        <p> Loading</p>
      ) : (
        <>
          <h1>{project.title}</h1>
          <div className="project">
            <div className="project-details">
              <img src={website} alt="website" />

              <div className="founder">
                <img src={accountIcon} alt="account icon" />
                <span>Ken Kindermann organized this project.</span>
                <hr />
              </div>
              <div className="description">{project.description}</div>
            </div>

            <div className="fund">
              <div className="goal">
                <p>3,858€ out of the {project.goal}€ donation goal</p>
                <progress value="3858" max={project.goal}></progress>
              </div>

              <button className="btn">Share</button>
              <button className="btn">Donate</button>
              <ul>
                {[...Array(5)].map((_, donation) => (
                  <Donation details={donation} />
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Project;
