import { Router } from "express";
import { createSchedulesController } from "../controllers/schedules.controller";
import ensureValidToken from "../middleware/ensureTokenIsValid.middleware";

const shedulesRoutes: Router = Router()

shedulesRoutes.post("", ensureValidToken, createSchedulesController)

export default shedulesRoutes