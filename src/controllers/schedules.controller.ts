import { Request, Response } from "express";
import { iShedules } from "../interfaces/schedules.interface";
import createSchedulesService from "../services/schedules/createSchedules.service";

const createSchedulesController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const scheduleData: iShedules = request.body;
  const userId = request.validatedAdmin.id
  const estateId = request.body.realEstateId

  const newSchedule = await createSchedulesService(scheduleData, userId, estateId);

  return response.status(201).json(newSchedule);
};

export { createSchedulesController };
