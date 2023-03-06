import { categoriesSchema, categoriesReturn, categoriesArray } from "../schemas/categoriesSchema";
import {z} from "zod"

type iCategory = z.infer<typeof categoriesSchema>
type iCategoryReturn = z.infer<typeof categoriesReturn> 
type iCategoryReturns = z.infer<typeof categoriesArray>

export {iCategory, iCategoryReturn, iCategoryReturns}