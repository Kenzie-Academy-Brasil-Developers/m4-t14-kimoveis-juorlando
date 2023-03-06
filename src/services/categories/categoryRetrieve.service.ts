import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Category } from "../../entities";
import { iCategoryReturns } from "../../interfaces/categories.interface";
import { categoriesArray, categoriesReturn } from "../../schemas/categoriesSchema";

const retrieveCategoryService = async (): Promise<iCategoryReturns> => {
  const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);

  const listCategories: Array<Category> = await categoryRepository.find();

  const categories = categoriesArray.parse(listCategories);

  return categories;
};

export { retrieveCategoryService };
