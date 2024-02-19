import express from "express";
import cors from "cors";
import projectsRouter from "./routes/projectsRouter.js";
import usersRouter from "./routes/usersRouter.js";
import { errorHandler } from "./middlewares/ErrorHandler.js";
import { connectDatabase } from "./db/client.js";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());

app.use("/users", usersRouter);
app.use("/projects", projectsRouter);

app.use(errorHandler);

const startServer = async () => {
  await connectDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer().catch((error) => {
  console.log(error, "Failed to start server");
});
