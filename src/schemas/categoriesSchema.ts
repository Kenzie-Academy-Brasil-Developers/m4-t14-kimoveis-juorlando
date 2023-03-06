import {z} from "zod";

const categoriesSchema = z.object({
    name: z.string().min(3).max(45)
})

const categoriesReturn = categoriesSchema.extend({
    id: z.number()
})

const categoriesArray = categoriesReturn.array()

export {categoriesSchema, categoriesReturn, categoriesArray}