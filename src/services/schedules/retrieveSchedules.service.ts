import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { AppError } from "../../errors";

const retrieveSchedulesService = async (estateId: number) => {
  const estateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const listSchedules = await estateRepository
    .createQueryBuilder("real_estate")
    .select(["real_estate.id", "listSchedules"])
    .innerJoin("real_estate.schedules", "listSchedules")
    .innerJoin("listSchedules.realEstate", "estates")
    .where("real_estate.id = :id", { id: estateId })
    .getOne();

  if (!listSchedules) {
    throw new AppError("Estate not found", 404);
  }

  return listSchedules;
};

export default retrieveSchedulesService;
