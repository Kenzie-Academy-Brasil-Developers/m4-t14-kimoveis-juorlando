import { Request, Response } from "express";
import {
  iRealEstate,
  iRealEstateReturn,
  iRealEstateReturns,
} from "../interfaces/realEstate.interface";
import createRealEstateService from "../services/realEstate/createRealEstate.service";
import retrieveRealEstateService from "../services/realEstate/retrieveRealEstate.service";

const createRealEstateController = async (
  request: Request,
  response: Response
) => {
  const estateData: iRealEstate = request.body;

  const newEstate = await createRealEstateService(estateData);

  return response.status(201).json(newEstate);
};

const retrieveRealEstateController = async (request: Request, response: Response) => {
  const getRealEstate: iRealEstateReturns = await retrieveRealEstateService();

  return response.status(200).json(getRealEstate);
};

export {
  createRealEstateController,
  retrieveRealEstateController,
};
