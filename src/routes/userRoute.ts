import { Router } from "express";
import { create, update } from "../controllers/userController";

import { validate } from "../middlewares/validationMiddleware";
import { userSchema } from "../schemas/createSchema";
import { updateUserSchema } from "../schemas/updateSchema";

const router = Router({ mergeParams: true });

export const userRouter = () => {
  router.post("", validate(userSchema), create);
  router.patch("/:userId", validate(updateUserSchema), update);

  return router;
};
