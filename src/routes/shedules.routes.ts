import { Router } from "express";
import { createSchedulesController } from "../controllers/schedules.controller";

const shedulesRoutes: Router = Router()

shedulesRoutes.post("", createSchedulesController)

export default shedulesRoutes