import React from "react";

// CSS
import "../styles/project.css";

// Images
import Donation from "../components/Donation";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Libraries
import axios from "axios";
import Donate from "../components/Donate";

const Project = () => {
  const [project, setProject] = useState(null);
  const [donate, setDonate] = useState(false);
  const { id } = useParams();

  const url = `http://localhost:8000/projects/${id}`;

  const getProject = async () => {
    try {
      const response = await axios.get(url);
      setProject(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProject();
  }, []);

  // Add totalAmount to project object
  useEffect(() => {
    setProject((prevProject) => {
      if (prevProject && !prevProject.totalAmount) {
        const totalAmount = prevProject.donations.reduce((acc, donation) => {
          return acc + donation.amount;
        }, 0);
        return { ...prevProject, totalAmount: totalAmount };
      }
      return prevProject;
    });
  }, [project]);

  return (
    <section id="project-view">
      {!project ? (
        <p> Loading</p>
      ) : (
        <>
          <h1>{project.title}</h1>
          <div className="project">
            <div className="project-details">
              <img src={project.image} alt="website" />

              <div className="founder">
                <img
                  src="/assets/account_circle_FILL0_wght400_GRAD0_opsz24.svg"
                  alt="account icon"
                />
                <span>{project.owner.name} organized this project.</span>
                <hr />
              </div>
              <div className="description">{project.description}</div>
            </div>

            <div className="fund">
              <div className="goal">
                <p>
                  {project.totalAmount}€ out of the {project.goal}€ donation
                  goal
                </p>
                <progress value={project.totalAmount} max={project.goal}></progress>
              </div>

              <button className="btn">Share</button>
              <button className="btn" onClick={() => setDonate(true)}>
                Donate
              </button>
              <ul>
                {project.donations.map((donation) => (
                  <Donation key={donation._id} details={donation} />
                ))}
              </ul>
            </div>
          </div>
          {donate && <Donate setDonate={setDonate} project_id={id} getProject={getProject}/>}
        </>
      )}
    </section>
  );
};

export default Project;
