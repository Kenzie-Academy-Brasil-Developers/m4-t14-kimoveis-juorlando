import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";

const userNotAdmin = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const userAuth = request.validatedAdmin;

  const getAdmin = await userRepository.findOneBy({
    id: parseInt(request.params.id),
  });

  if (userAuth.admin.toString() !== "true" && getAdmin!.admin.toString() === "true") {
    throw new AppError("Insufficient Permission", 403);
  }

  return next();
};

export default userNotAdmin;
