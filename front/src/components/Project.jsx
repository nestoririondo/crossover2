// CSS
import "../styles/project.css";

// Images
import website from "../assets/website.png";
import accountIcon from "../assets/account_circle_FILL0_wght400_GRAD0_opsz24.png";
import Donation from "./Donation";

const ProjectView = () => {
  return (
    <section id="project-view">
      <h1>Support my open source social media app for cats</h1>
      <div className="project">
        <div className="project-details">
          <img src={website} alt="website" />

          <div className="founder">
            <img src={accountIcon} alt="account icon" />
            <span>Ken Kindermann organized this project.</span>
            <hr />
          </div>
          <div className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor facere eius maxime hic molestiae libero
            rerum, id nisi corporis dicta debitis possimus accusantium officia quasi amet nihil! Quasi, optio enim?
            Commodi numquam iste minus quo dignissimos ex laboriosam ipsam a! Unde, reprehenderit porro! Corporis
            suscipit explicabo sunt facere odit accusantium eaque aperiam ex. Numquam, officiis animi! Dignissimos,
            rerum repellat. Ab? Ex eum in blanditiis fuga. Aperiam, esse ratione dolore ab maxime earum et libero
            exercitationem quas odio. Quod, saepe molestias non error numquam eligendi aliquid! Laborum neque nostrum
            rerum et. Possimus omnis harum molestias
          </div>
        </div>

        <div className="fund">
          <p>€3,858 out of the €20,000 donation goal</p>
          <progress value="3858" max="20000"></progress>
          <button className="btn">Share</button>
          <button className="btn">Donate</button>
          <ul>
            {[...Array(5)].map((_, donation) => (
              <Donation details={donation} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectView;
