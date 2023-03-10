import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { iRealEstateReturns } from "../../interfaces/realEstate.interface";
import { realEstateArray } from "../../schemas/realEstateSchema";

const retrieveRealEstateService = async (): Promise<iRealEstateReturns> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const findEstate = await realEstateRepository.find({
    relations: {
      address: true,
      category: true,
    },
  });

  const listEstates = realEstateArray.parse(findEstate)

  return listEstates;
};

export default retrieveRealEstateService;
