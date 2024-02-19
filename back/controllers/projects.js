import Project from "../models/Project.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findById(id);
    res.json(project);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createProject = async (req, res) => {
  const { user_id, title, description, goal, image, category } = req.body;
  const newProject = new Project({
    owner: user_id,
    title,
    description,
    goal,
    image,
    category,
  });
  try {
    const savedProject = await Project.create(newProject);
    res.json(savedProject);
  } catch (error) {
    res.json({ message: error.message });
  }
};
