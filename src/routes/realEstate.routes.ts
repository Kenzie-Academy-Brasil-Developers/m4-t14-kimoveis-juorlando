import { Router } from "express";
import { createRealEstateController } from "../controllers/realEstate.controller";
import ensureDataIsValidMiddleware from "../middleware/ensureDataIsValid.middleware";
import { createRealEstateSchema } from "../schemas/realEstateSchema";

const realEstateRoutes: Router = Router()

realEstateRoutes.post("", ensureDataIsValidMiddleware(createRealEstateSchema), createRealEstateController)

export default realEstateRoutes