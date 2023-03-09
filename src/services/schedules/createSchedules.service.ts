import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { RealEstate, Schedules, User } from "../../entities";
import { AppError } from "../../errors";
import {
  iShedules,
  iShedulesReturn,
} from "../../interfaces/schedules.interface";
import { schedulesSchemaReturn } from "../../schemas/schedulesSchema";

const createSchedulesService = async (
  scheduleData: iShedules,
  userId: number,
): Promise<Schedules> => {

  const schedulesRepository: Repository<Schedules> = AppDataSource.getRepository(Schedules);

  const checkUser = await schedulesRepository
  .createQueryBuilder("schedules_users_properties")
  .leftJoinAndSelect("schedules_users_properties.user", "users")
  .where("users.id = :id", {id: userId})
  .andWhere("schedules_users_properties.date = :date", {date: scheduleData.date})
  .andWhere("schedules_users_properties.hour = :hour", {hour: scheduleData.hour})
  .getOne()

  if(checkUser){
    throw new AppError("Date already in use")
  }

  const checkEstate = await schedulesRepository
  .createQueryBuilder("schedules_users_properties")
  .leftJoinAndSelect("schedules_users_properties.realEstate", "realEstates")
  .where("realEstates.id = :id", {id: scheduleData.realEstateId})
  .andWhere("schedules_users_properties.date = :date", {date: scheduleData.date})
  .andWhere("schedules_users_properties.hour = :hour", {hour: scheduleData.hour})
  .getOne()

  if(checkEstate){
    throw new AppError("Estate already in use")
  }

  const estateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

  const newEstate= await estateRepository.findOneBy({
    id: scheduleData.realEstateId
  });

  if (!newEstate) {
    throw new AppError("Estate not found");
  }

  const userRepository: Repository<User> = AppDataSource.getRepository(User)

  const user: User | null = await userRepository.findOneBy({
    id: userId
})

  const createSchedules = schedulesRepository.create({
    ...scheduleData,
    user: user!,
    realEstate: newEstate!,
  })

  await schedulesRepository.save(createSchedules)

  return createSchedules;
};

export default createSchedulesService;
