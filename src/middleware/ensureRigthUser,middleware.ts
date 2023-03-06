import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

const ensureRightUser = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const userAuth = request.validatedAdmin;
  const userId: number = parseInt(request.params.id);

  if (userAuth.id !== userId && userAuth.admin.toString() !== "true") {
    throw new AppError("Insufficient Permission", 403);
  }

  return next();
};

export default ensureRightUser;
