import "../styles/ProjectCard.css"
const ProjectCard = () => {
  return (
    <>
      <article className="project-card">
        <img
          src="https://thumbs.dreamstime.com/b/coding-concept-html-code-coding-programming-concept-html-source-code-tilted-vector-illustration-155503904.jpg"
          alt=""
        />
        <h3>Support my open source cat food app</h3>
        <p className="creator">Creator: Max Mustermann</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam earum
          fugit eos commodi magnam tempore expedita sint quae dolores a eaque,
          architecto explicabo vel quo vero, ut neque, vitae officiis!
        </p>

        <div className="progress-bar">
          <div className="progress-bar--green"></div>
          <div className="progress-bar--grey"></div>
        </div>
        <p>1234 € donated</p>
      </article>
    </>
  );
};

export default ProjectCard;
