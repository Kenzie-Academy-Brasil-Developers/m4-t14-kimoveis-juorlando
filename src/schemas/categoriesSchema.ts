import {z} from "zod";
import { realEstateReturn } from "./realEstateSchema";

const categoriesSchema = z.object({
    name: z.string().min(3).max(45)
})

const categoriesReturn = categoriesSchema.extend({
    id: z.number()
})

const categoriesArray = categoriesReturn.array()

const categoryRealEstateSchema = categoriesReturn.extend({
    realEstate: realEstateReturn.array()
})

const categoryRealEstateReturn = categoryRealEstateSchema.array()

export {categoriesSchema, categoriesReturn, categoriesArray, categoryRealEstateSchema, categoryRealEstateReturn}