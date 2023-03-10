import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  retrieveUserController,
  updateUserController,
} from "../controllers/user.controller";
import ensureDataIsValidMiddleware from "../middleware/ensureDataIsValid.middleware";
import ensureEmailNotExists from "../middleware/ensureEmail.middleware";
import ensureEmail from "../middleware/ensureEmailDivergence.middleware";
import ensureIsAdmin from "../middleware/ensureIsAdmin.middleware";
import ensureRightUser from "../middleware/ensureRigthUser,middleware";
import ensureValidToken from "../middleware/ensureTokenIsValid.middleware";
import ensureUserExistsMiddleware from "../middleware/ensureUserExisits.middleware";
import userNotAdmin from "../middleware/userNotAdmin.middleware";
import { createUserSchema, updateSchema } from "../schemas/userSchema";

const userRoutes: Router = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(createUserSchema),
  ensureEmailNotExists,
  createUserController
);

userRoutes.get("", ensureValidToken, ensureIsAdmin, retrieveUserController);

userRoutes.patch(
  "/:id",
  ensureDataIsValidMiddleware(updateSchema),
  ensureValidToken,
  ensureUserExistsMiddleware,
  userNotAdmin,
  ensureRightUser,
  ensureEmail,
  updateUserController
);

userRoutes.delete(
  "/:id",
  ensureUserExistsMiddleware,
  ensureValidToken,
  userNotAdmin,
  ensureRightUser,
  deleteUserController
);

export default userRoutes;
