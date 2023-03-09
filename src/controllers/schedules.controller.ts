import { Request, Response } from "express";
import { iShedules } from "../interfaces/schedules.interface";
import createSchedulesService from "../services/schedules/createSchedules.service";
import retrieveSchedulesService from "../services/schedules/retrieveSchedules.service";

const createSchedulesController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const scheduleData: iShedules = request.body;
  const userId = request.validatedAdmin.id

  const newSchedule = await createSchedulesService(scheduleData, userId);

  return response.status(201).json(newSchedule);
};

const retrieveSchedulesController =async (request:Request, response: Response)=> {

  const estateId = parseInt(request.params.id)

  const listDate = await retrieveSchedulesService(estateId)

  return response.status(201).json(listDate)
  
}

export { createSchedulesController, retrieveSchedulesController };
