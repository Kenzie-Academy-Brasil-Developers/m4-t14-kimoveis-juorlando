import { Router } from "express";
import {
  createUserController,
  retrieveUserController,
} from "../controllers/user.controller";
import ensureDataIsValidMiddleware from "../middleware/ensureDataIsValid.middleware";
import ensureEmailNotExists from "../middleware/ensureEmail.middleware";
import ensureIsAdmin from "../middleware/ensureIsAdmin.middleware";
import ensureValidToken from "../middleware/ensureTokenIsValid.middleware";
import { createUserSchema } from "../schemas/userSchema";

const userRoutes: Router = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(createUserSchema),
  ensureEmailNotExists,
  createUserController
);

userRoutes.get("", ensureValidToken, ensureIsAdmin, retrieveUserController);

export default userRoutes;
