import { Express } from "express";
import { userRouter } from "./userRoute";

export const initializerRouter = (app: Express) => {
  app.use("/users", userRouter());
};
