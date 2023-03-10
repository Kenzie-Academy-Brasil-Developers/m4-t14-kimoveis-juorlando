import { Request, Response, NextFunction } from "express"
import { AppError } from "../errors";

const ensureIsAdmin = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const adminAuth = request.validatedAdmin;

  if (adminAuth.admin.toString() !== "true") {
    throw new AppError("Insufficient permission");
  }

  return next();
};

export default ensureIsAdmin;
