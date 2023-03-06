import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Address, RealEstate } from "../../entities";
import {
  iAddress,
  iAddressReturn,
} from "../../interfaces/realEstate.interface";
import { AddressReturn } from "../../schemas/realEstateSchema";

const createAddressService = async (
  estateId: number,
  addressData: iAddress
): Promise<iAddressReturn> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);
  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const newAddress = addressRepository.create(addressData);
  await addressRepository.save(newAddress);

  const realEstate = await realEstateRepository.findOneBy({
    id: estateId,
  });

  realEstate!.address = newAddress;

  await realEstateRepository.save(realEstate!);

  const returnAddress = AddressReturn.parse(newAddress);

  return returnAddress;
};

export default createAddressService;
