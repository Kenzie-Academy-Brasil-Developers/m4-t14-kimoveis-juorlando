import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule, User } from "../../entities";
import { AppError } from "../../errors";
import { iShedules } from "../../interfaces/schedules.interface";

const createSchedulesService = async (
  scheduleData: iShedules,
  userId: number
): Promise<Schedule> => {
  const schedulesRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const getDate = `${scheduleData.date}, ${scheduleData.hour}`;
  const parseDate = new Date(getDate);
  const formatedHour = parseDate.getHours();
  const formatedDay = parseDate.getDay();

  if (formatedHour > 18 || formatedHour < 8) {
    throw new AppError("Invalid hour: only hours between 8:00 am and 18:00 pm");
  }

  if (formatedDay === 6 || formatedDay === 0) {
    throw new AppError("Invalid day: Only workdays are markable");
  }

  const checkUser = await schedulesRepository
    .createQueryBuilder("schedules_users_properties")
    .leftJoinAndSelect("schedules_users_properties.user", "users")
    .where("users.id = :id", { id: userId })
    .andWhere("schedules_users_properties.date = :date", {
      date: scheduleData.date,
    })
    .andWhere("schedules_users_properties.hour = :hour", {
      hour: scheduleData.hour,
    })
    .getOne();

  if (checkUser) {
    throw new AppError("Date already in use");
  }

  const checkEstate = await schedulesRepository
    .createQueryBuilder("schedules_users_properties")
    .leftJoinAndSelect("schedules_users_properties.realEstate", "realEstates")
    .where("realEstates.id = :id", { id: scheduleData.realEstateId })
    .andWhere("schedules_users_properties.date = :date", {
      date: scheduleData.date,
    })
    .andWhere("schedules_users_properties.hour = :hour", {
      hour: scheduleData.hour,
    })
    .getOne();

  if (checkEstate) {
    throw new AppError("Estate already in use");
  }

  const estateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const newEstate = await estateRepository.findOneBy({
    id: scheduleData.realEstateId,
  });

  if (!newEstate) {
    throw new AppError("Estate not found");
  }

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    id: userId,
  });

  const createSchedules = schedulesRepository.create({
    ...scheduleData,
    user: user!,
    realEstate: newEstate!,
  });

  await schedulesRepository.save(createSchedules);

  return createSchedules;
};

export default createSchedulesService;
