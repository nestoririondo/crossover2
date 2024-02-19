import { Router } from "express";
import * as projectController from "../controllers/projects.js";
const projectRouter = Router();

projectRouter.get("/all", projectController.getProjects);
projectRouter.get("/:id", projectController.getProject);
projectRouter.post("/newproject", projectController.createProject);
projectRouter.post("/donate", projectController.createDonation);

export default projectRouter;
