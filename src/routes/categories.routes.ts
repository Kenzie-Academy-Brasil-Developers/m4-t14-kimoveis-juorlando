import { Router } from "express";
import { createCategoryController, retrieveCategoryController } from "../controllers/categories.controller";
import ensureCategoryNameNotExists from "../middleware/ensureCategoryNameNotExists.middleware";
import ensureDataIsValidMiddleware from "../middleware/ensureDataIsValid.middleware";
import ensureIsAdmin from "../middleware/ensureIsAdmin.middleware";
import ensureValidToken from "../middleware/ensureTokenIsValid.middleware";
import { categoriesSchema } from "../schemas/categoriesSchema";

const categoriesRoutes: Router = Router();

categoriesRoutes.post(
  "",
  ensureValidToken,
  ensureIsAdmin,
  ensureDataIsValidMiddleware(categoriesSchema),
  ensureCategoryNameNotExists,
  createCategoryController
);

categoriesRoutes.get("", retrieveCategoryController)

export default categoriesRoutes;
