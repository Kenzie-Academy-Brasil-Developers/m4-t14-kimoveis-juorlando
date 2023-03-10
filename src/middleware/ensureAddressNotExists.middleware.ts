import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Address } from "../entities";
import { AppError } from "../errors";

const ensureAddress = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const findAddressNumber = await addressRepository.findOneBy({
    ...request.body.address,
    number: request.body.address.number,
  });

  if (findAddressNumber) {
    throw new AppError("Address already exists");
  }

  return next();
};

export default ensureAddress;
