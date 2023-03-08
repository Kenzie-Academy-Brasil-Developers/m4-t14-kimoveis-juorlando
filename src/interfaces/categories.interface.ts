import {
  categoriesSchema,
  categoriesReturn,
  categoriesArray,
  categoryRealEstateSchema,
  categoryRealEstateReturn
} from "../schemas/categoriesSchema";
import { z } from "zod";

type iCategory = z.infer<typeof categoriesSchema>;
type iCategoryReturn = z.infer<typeof categoriesReturn>;
type iCategoryReturns = z.infer<typeof categoriesArray>;
type iCategoryRealEstateReturns = z.infer<typeof categoryRealEstateReturn>;
type iCategoryRealEstateReturn = z.infer<typeof categoryRealEstateSchema>

export {
  iCategory,
  iCategoryReturn,
  iCategoryReturns,
  iCategoryRealEstateReturn,
  iCategoryRealEstateReturns
};
