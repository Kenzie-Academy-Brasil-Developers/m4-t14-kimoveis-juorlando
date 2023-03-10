import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import {
  iCategoryReturn,
  iCategory,
} from "../../interfaces/categories.interface";
import { categoriesReturn } from "../../schemas/categoriesSchema";

const createCategoryService = async (
  categoryData: iCategory
): Promise<iCategoryReturn> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const category: Category = categoryRepository.create(categoryData);

  await categoryRepository.save(category);

  const newCategory = categoriesReturn.parse(category);

  return newCategory;
};

export { createCategoryService };
