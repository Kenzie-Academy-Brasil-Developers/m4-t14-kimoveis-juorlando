import { Router } from "express";
import {
  createRealEstateController,
  retrieveRealEstateController,
} from "../controllers/realEstate.controller";
import ensureAddress from "../middleware/ensureAddressNotExists.middleware";
import ensureDataIsValidMiddleware from "../middleware/ensureDataIsValid.middleware";
import ensureIsAdmin from "../middleware/ensureIsAdmin.middleware";
import ensureValidToken from "../middleware/ensureTokenIsValid.middleware";
import { createRealEstateSchemaPost } from "../schemas/realEstateSchema";

const realEstateRoutes: Router = Router();

realEstateRoutes.post(
  "",
  ensureDataIsValidMiddleware(createRealEstateSchemaPost),
  ensureValidToken,
  ensureIsAdmin,
  ensureAddress,
  createRealEstateController
);

realEstateRoutes.get("", retrieveRealEstateController);

export default realEstateRoutes;
