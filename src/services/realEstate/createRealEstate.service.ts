import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { RealEstate } from "../../entities";
import {
  iRealEstate,
  iRealEstateReturn,
} from "../../interfaces/realEstate.interface";
import { realEstateReturn } from "../../schemas/realEstateSchema";

const createRealEstateService = async (
  estateData: iRealEstate
): Promise<iRealEstateReturn> => {
  const estateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realEstate = estateRepository.create(estateData);

  await estateRepository.save(realEstate);

  const newRealEstate = realEstateReturn.parse(realEstate);

  return newRealEstate;
};

export default createRealEstateService;
