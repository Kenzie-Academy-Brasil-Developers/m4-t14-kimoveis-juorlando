import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";
import { AppError } from "../../errors";
import {
  iAddress,
  iRealEstate,
  iRealEstateReturn,
} from "../../interfaces/realEstate.interface";

const createRealEstateService = async (
  estateData: iRealEstate
) => {
  const addressData: iAddress = estateData.address;

  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const newCategory = await categoryRepository.findOneBy({
    id: estateData.categoryId,
  });

  if (!newCategory) {
    throw new AppError("Category not found");
  }

  addressRepository.create(addressData);

  const newAddress = await addressRepository.save(addressData);

  const estateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realEstate = estateRepository.create({
    ...estateData,
    address: newAddress!,
    category: newCategory!,
  });

  await estateRepository.save(realEstate);

  return realEstate;
};

export default createRealEstateService;
