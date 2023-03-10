import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category, RealEstate } from "../../entities";

const categoryRetrieveRealEstateService = async (
  categoryId: number
) => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const listCategories = await categoryRepository.findOne({
    where: {
      id: categoryId,
    },
    relations: {
      realEstate: true,
    },
  });

  return listCategories;
};

export default categoryRetrieveRealEstateService;
