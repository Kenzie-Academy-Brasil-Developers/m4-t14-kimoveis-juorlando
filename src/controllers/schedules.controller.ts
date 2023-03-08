import { Request, Response } from "express";
import { iShedules } from "../interfaces/schedules.interface";
import createSchedulesService from "../services/schedules/createSchedules.service";

const createSchedulesController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const scheduleData: iShedules = request.body;

  const newSchedule = await createSchedulesService(scheduleData);

  return response.status(201).json(newSchedule);
};

export { createSchedulesController };
