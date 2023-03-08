import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Category, RealEstate } from "../../entities";
import { iCategoryRealEstateReturn, iCategoryRealEstateReturns } from "../../interfaces/categories.interface";
import { categoryRealEstateReturn, categoryRealEstateSchema } from "../../schemas/categoriesSchema";

const categoryRetrieveRealEstateService = async (
  categoryId: number
): Promise<iCategoryRealEstateReturns> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const listCategories: Array<Category> = await categoryRepository.find({
    where: {
      id: categoryId,
    },
    relations: {
      realEstate: true
    },
  });

  const returnCategories = categoryRealEstateReturn.parse(listCategories!);

  return returnCategories;
};

export default categoryRetrieveRealEstateService;
