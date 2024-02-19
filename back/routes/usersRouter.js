import { Router } from "express";
import { registerUser, loginUser, getUser } from "../controllers/users.js";
import { checkData, checkUserExists } from "../middlewares/users.js";
import { authenticate } from "../middlewares/authenticate.js";

const usersRouter = Router();

usersRouter.post("/", checkData, checkUserExists, registerUser);
usersRouter.post("/login", loginUser);
usersRouter.get("/user", authenticate, getUser);

export default usersRouter;
