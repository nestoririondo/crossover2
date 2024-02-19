import "../styles/ProjectCard.css";
const ProjectCard = ({ project }) => {
  return (
    <>
      <article className="project-card">
        <img src={project.image} alt="" />
        <h3>{project.title}</h3>
        <p className="creator">Creator: {project.owner}</p>
        <p className="description">{project.description}</p>

        <progress
          value={project.donations.length}
          max={project.goal}
        ></progress>
        <p>{project.donations.length} € donated</p>
        {/* <p>{project.donations.map(donation => (
            <p>donation.ammount</p>)) } € donated</p> */}
        {project.category.length < 1 ? null : project.category.length === 1 ? (
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
        )}
      </article>
    </>
  );
};

export default ProjectCard;
