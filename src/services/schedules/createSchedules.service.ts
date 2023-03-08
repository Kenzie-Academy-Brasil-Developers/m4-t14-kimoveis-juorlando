import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Schedules } from "../../entities";
import {
  iShedules,
  iShedulesReturn,
} from "../../interfaces/schedules.interface";

const createSchedulesService = async (
  scheduleData: iShedules
): Promise<Schedules> => {
  const shedulesRepository: Repository<Schedules> =
    AppDataSource.getRepository(Schedules);

  const shedules = shedulesRepository.create(scheduleData);

  await shedulesRepository.save(shedules);

  return shedules;
};

export default createSchedulesService;
