import React from "react";
import "../styles/projectCard.css";
import {Link} from "react-router-dom"

const ProjectCard = ({ project }) => {
  const text = project.description;
  const words = text.split(" ");
  const descriptionText = words.slice(0, 30).join(" ");

  return (
    <>
      <article className="project-card">
        <Link to={`/project/${project._id}`}>
        <img src={project.image} alt="" />
        <h3>{project.title}</h3>
        <p className="creator">Creator: {project.owner.name}</p>
        <p className="description">{descriptionText}</p>

        <progress

          value={project.donations.reduce((prev, donation) => prev + donation.amount, 0)}
          max={project.goal}
        ></progress>

        {project.donations.length > 0 ? (
          <p>
            {project.donations.reduce(
              (prev, donation) => prev + donation.amount,
              0
            )}{" "}
            € donated
          </p>
        ) : (
          <p>0 € donated</p>
        )}

        {/* {project.category.length < 1 ? null : project.category.length === 1 ? (
          <p>
            Category: <span className="category">{project.category[0]}</span>
          </p>
        ) : (
          <p>
            Categories:
            {project.category.map((cat) => (
              <span className="category">{cat}</span>
            ))}
          </p>
        )} */}
        </Link>
      </article>
    </>
  );
};

export default ProjectCard;
