import { Router } from "express";
import {
  createRealEstateController,
  retrieveRealEstateController,
} from "../controllers/realEstate.controller";
import ensureAddress from "../middleware/ensureAddressNotExists.middleware";
import ensureDataIsValidMiddleware from "../middleware/ensureDataIsValid.middleware";
import { createRealEstateSchema } from "../schemas/realEstateSchema";

const realEstateRoutes: Router = Router();

realEstateRoutes.post(
  "",
  ensureDataIsValidMiddleware(createRealEstateSchema),
  ensureAddress,
  createRealEstateController
);

realEstateRoutes.get("", retrieveRealEstateController);

export default realEstateRoutes;
