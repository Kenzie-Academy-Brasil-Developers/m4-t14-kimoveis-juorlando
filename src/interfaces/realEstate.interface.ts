import { DeepPartial } from "typeorm";
import { z } from "zod";
import {
  AddressReturn,
  createAddressSchema,
  createRealEstateSchema,
  realEstateArray,
  realEstateReturn,
} from "../schemas/realEstateSchema";

type iAddress = z.infer<typeof createAddressSchema>;
type iAddressReturn = z.infer<typeof AddressReturn>;
type iRealEstate = z.infer<typeof createRealEstateSchema>;
type iRealEstateReturn = z.infer<typeof realEstateReturn>;
type iRealEstateReturns = z.infer<typeof realEstateArray>;

type iRealEstateUpdate = DeepPartial<iRealEstate>;
type iAddressUpdate = DeepPartial<iAddress>;

export {
  iAddress,
  iAddressReturn,
  iRealEstate,
  iRealEstateReturn,
  iRealEstateReturns,
  iRealEstateUpdate,
  iAddressUpdate,
};
