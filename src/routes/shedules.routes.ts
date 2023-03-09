import { Router } from "express";
import { createSchedulesController, retrieveSchedulesController } from "../controllers/schedules.controller";
import ensureIsAdmin from "../middleware/ensureIsAdmin.middleware";
import ensureValidToken from "../middleware/ensureTokenIsValid.middleware";

const shedulesRoutes: Router = Router()

shedulesRoutes.post("", ensureValidToken, createSchedulesController)

shedulesRoutes.get("/realEstate/:id", ensureValidToken, ensureIsAdmin, retrieveSchedulesController)

export default shedulesRoutes