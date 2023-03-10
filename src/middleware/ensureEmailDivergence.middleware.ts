import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";

const ensureEmail = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const adminAuth = request.validatedAdmin;

  const findEmail = await userRepository.findOneBy({
    name: request.body.email,
  });

  const findUser = await userRepository.findOneBy({
    id: parseInt(request.params.id),
  });

  const emailExist = findEmail?.email === request.body.email;

  if (emailExist === true && findEmail?.id !== findUser?.id) {
    throw new AppError("Email already exists.", 409);
  }

  return next();
};

export default ensureEmail;
