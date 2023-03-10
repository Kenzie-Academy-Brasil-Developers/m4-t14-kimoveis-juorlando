import { DeepPartial } from "typeorm";
import { z } from "zod";
import {
  AddressReturn,
  createAddressSchema,
  createRealEstateSchema,
  realEstateArray,
  realEstateReturn,
  realEstateReturn2,
} from "../schemas/realEstateSchema";

type iAddress = z.infer<typeof createAddressSchema>;
type iAddressReturn = z.infer<typeof AddressReturn>;
type iRealEstate = z.infer<typeof createRealEstateSchema>;
type iRealEstateReturn = z.infer<typeof realEstateReturn>;
type iRealEstateReturns = z.infer<typeof realEstateArray>;
type iRealEstatePost = z.infer<typeof realEstateReturn2>

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
  iRealEstatePost
};
