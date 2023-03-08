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
  estateId: number
): Promise<iShedulesReturn> => {

  const estateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);
  
  const schedulesRepository: Repository<Schedules> = AppDataSource.getRepository(Schedules);

  const userRepository: Repository<User> = AppDataSource.getRepository(User)

  const newEstate= await estateRepository.findOneBy({
    id: estateId
  });

  if (!newEstate) {
    throw new AppError("Estate not found");
  }

  schedulesRepository.create(scheduleData)

  const user: User | null = await userRepository.findOneBy({
    id: userId
})

  const userSchedules = schedulesRepository.create({
    ...scheduleData,
    user: user!,
    realEstate: newEstate!,
  })

  await schedulesRepository.save(userSchedules)

  const newSchelules = schedulesSchemaReturn.parse(userSchedules);

  return newSchelules
};

export default createSchedulesService;
