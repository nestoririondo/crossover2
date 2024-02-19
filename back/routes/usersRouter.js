import { Router } from "express";
import { registerUser, loginUser, getUser } from "../controllers/users.js";
import { checkData } from "../middlewares/checkData.js";
import { authenticate } from "../middlewares/authenticate.js";

const usersRouter = Router();

usersRouter.post("/", checkData, registerUser);
usersRouter.post("/login", loginUser);
usersRouter.get("/user", authenticate, getUser);

export default usersRouter;
