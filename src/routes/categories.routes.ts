import { Router } from "express";
import { categoryRetrieveRealEstateController, createCategoryController, retrieveCategoryController } from "../controllers/categories.controller";
import ensureCategoryExistsMiddleware from "../middleware/ensureCategoryExisits.middleware copy";
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

categoriesRoutes.get("/:id/realEstate", ensureCategoryExistsMiddleware, categoryRetrieveRealEstateController)

export default categoriesRoutes;
