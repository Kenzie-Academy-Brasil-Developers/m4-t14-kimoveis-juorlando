import { Router } from "express";
import { createSchedulesController, retrieveSchedulesController } from "../controllers/schedules.controller";
import ensureDataIsValidMiddleware from "../middleware/ensureDataIsValid.middleware";
import ensureIsAdmin from "../middleware/ensureIsAdmin.middleware";
import ensureValidToken from "../middleware/ensureTokenIsValid.middleware";
import { schedulesSchema } from "../schemas/schedulesSchema";

const shedulesRoutes: Router = Router()

shedulesRoutes.post("", ensureValidToken, ensureDataIsValidMiddleware(schedulesSchema), createSchedulesController)

shedulesRoutes.get("/realEstate/:id", ensureValidToken, ensureIsAdmin, retrieveSchedulesController)

export default shedulesRoutes