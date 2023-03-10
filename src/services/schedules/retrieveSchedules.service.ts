import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { AppError } from "../../errors";

const retrieveSchedulesService = async (estateId: number) => {
  const estateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const listSchedules = await estateRepository
    .createQueryBuilder("real_estate")
    .select(["real_estate", "listSchedules", "user", "categories", "addresses"])
    .innerJoin("real_estate.category", "categories")
    .innerJoin("real_estate.address", "addresses")
    .innerJoin("real_estate.schedules", "listSchedules")
    .innerJoin("listSchedules.user", "user")
    .innerJoin("listSchedules.realEstate", "estates")
    .where("real_estate.id = :id", { id: estateId })
    .getOne();

  if (!listSchedules) {
    throw new AppError("RealEstate not found", 404);
  }

  return listSchedules;
};

export default retrieveSchedulesService;
