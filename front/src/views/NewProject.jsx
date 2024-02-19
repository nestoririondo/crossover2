import "../styles/newProject.css";
import moment from "moment";
import axios from "axios";
import { useAuth } from "../context/useAuth";

const NewProject = () => {
  const url = `http://localhost:8000/projects/newProject`;
  const { user } = useAuth();

  console.log(user._id);
  const handleSubmit = (e) => {
    e.preventDefault();
    createObject(e);
  };

  const createObject = (e) => {
    const newProject = {
      user_id: user._id,
      title: e.target.elements.title.value,
      description: e.target.elements.description.value,
      goal: e.target.elements.goal.value,
      image: "url",
    };

    postData(newProject);
  };

  const postData = async (project) => {
    try {
      const response = await axios.post(url, project);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section id="new-project">
      <h1>Start Project</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="title" placeholder="Title" />
        <textarea name="description" id="" cols="30" rows="10" placeholder="description"></textarea>
        <input name="image" type="text" />
        <input type="number" name="goal" placeholder="Goal" />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default NewProject;
