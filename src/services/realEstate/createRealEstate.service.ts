import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";
import {
  iRealEstate,
  iRealEstateReturn,
} from "../../interfaces/realEstate.interface";
import { realEstateReturn } from "../../schemas/realEstateSchema";

const createRealEstateService = async (
  estateData: iRealEstate
): Promise<iRealEstateReturn> => {

  const addressData = estateData.address

  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

  const newCategory = await categoryRepository.findOneBy({
    id: estateData.categoryId
  })

  

     addressRepository.create(addressData);
     const newAddress = await addressRepository.save(addressData);

  const estateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realEstate = estateRepository.create({
    ...estateData,
    address: newAddress!,
    category: newCategory!
  });

  await estateRepository.save(realEstate);

  const newRealEstate = realEstateReturn.parse(realEstate);

  return newRealEstate;
};

export default createRealEstateService;
