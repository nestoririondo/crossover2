import "../styles/projectCard.css";
const ProjectCard = ({ project }) => {
  return (
    <>
      <article className="project-card">
        <img src={project.image} alt="" />
        <h3>{project.title}</h3>
        <p className="creator">Creator: {project.owner}</p>
        <p className="description">{project.description}</p>

        <progress
          value={1234}
          max={project.goal}
        ></progress>

        {project.donations.length > 0 ? <p>{project.donations.reduce((prev, donation) => prev + donation.amount, 0)}  € donated</p> : <p>0 € donated</p>}
        
        
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
