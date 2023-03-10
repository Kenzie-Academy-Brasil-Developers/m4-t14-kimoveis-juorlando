import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Category } from "../entities";
import { AppError } from "../errors";

const ensureCategoryNameNotExists = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const findCategory = await categoryRepository.findOneBy({
    name: request.body.name,
  });

  if (findCategory) {
    throw new AppError("Category already exists", 409);
  }

  return next();
};

export default ensureCategoryNameNotExists;
