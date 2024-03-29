import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";

const ensureEmailNotExists = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUserEmail = await userRepository.findOneBy({
    email: request.body.email,
  });

  if (findUserEmail) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};

export default ensureEmailNotExists;
