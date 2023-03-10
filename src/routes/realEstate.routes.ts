import { Router } from "express";
import {
  createRealEstateController,
  retrieveRealEstateController,
} from "../controllers/realEstate.controller";
import ensureAddress from "../middleware/ensureAddressNotExists.middleware";
import ensureDataIsValidMiddleware from "../middleware/ensureDataIsValid.middleware";
import ensureRightUser from "../middleware/ensureRigthUser,middleware";
import ensureValidToken from "../middleware/ensureTokenIsValid.middleware";
import userNotAdmin from "../middleware/userNotAdmin.middleware";
import { createRealEstateSchemaPost } from "../schemas/realEstateSchema";

const realEstateRoutes: Router = Router();

realEstateRoutes.post(
  "",
  ensureValidToken,
  ensureDataIsValidMiddleware(createRealEstateSchemaPost),
  ensureAddress,
  createRealEstateController
);

realEstateRoutes.get("", retrieveRealEstateController);

export default realEstateRoutes;
