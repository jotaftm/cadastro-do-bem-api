import { Request, Response, NextFunction } from "express";
import { createUser, updateUser } from "../services/user.service";

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = req.body;

    const user = await createUser(body);

    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = req.body;

    const userId = req.params.userId;

    const userUpdated = await updateUser(userId, body);

    res.json(userUpdated);
  } catch (err) {
    next(err);
  }
};
