import { Request, Response } from "express";
import { iRealEstate } from "../interfaces/realEstate.interface";
import createAddressService from "../services/address/createAddress.service";
import createRealEstateService from "../services/realEstate/createRealEstate.service";

const createRealEstateController = async (
  request: Request,
  response: Response
) => {
  const estateData: iRealEstate = request.body;

  const newEstate = await createRealEstateService(estateData);

  return response.status(201).json(newEstate);
};

const createAddressController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const addressData = request.body;
  const estateId: number = request.validatedAdmin.id;

  const newAddress = await createAddressService(estateId, addressData);

  return response.status(201).json(newAddress);
};

export {createRealEstateController, createAddressController};
