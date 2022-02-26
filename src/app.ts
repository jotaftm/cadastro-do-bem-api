import "reflect-metadata";
import express from "express";
import { connectDatabase } from "./database";
import { initializerRouter } from "./routes";
import { handleError } from "./middlewares/errorMiddleware";

connectDatabase();

const app = express();

app.use(express.json());

initializerRouter(app);

app.use(handleError);

export default app;
