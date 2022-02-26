import { GenericError } from "../errors/genericError";
import { Request, Response, NextFunction } from "express";

export const handleError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof GenericError) {
    return res
      .status(err.statusCode)
      .json({ status: "error", message: err.message });
  }
  return res
    .status(500)
    .json({ status: "error", message: "internal server error" });
};
