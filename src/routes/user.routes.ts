import { Router } from "express";
import { createUserController } from "../controllers/user.controller";
import ensureDataIsValidMiddleware from "../middleware/ensureDataIsValid.middleware";
import { ensureEmailNotExists } from "../middleware/ensureEmail.middleware";
import { createUserSchema } from "../schemas/userSchema";

const userRoutes: Router = Router()

userRoutes.post("", ensureDataIsValidMiddleware(createUserSchema), ensureEmailNotExists, createUserController)

export default userRoutes