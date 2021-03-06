import "reflect-metadata";
import express from "express";
import { connectDatabase } from "./database";
import { initializerRouter } from "./routes";
import { handleError } from "./middlewares/errorMiddleware";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

connectDatabase();

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

initializerRouter(app);

app.use(handleError);

export default app;
